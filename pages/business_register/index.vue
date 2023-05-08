<template>
  <div class="business-register">
    <div class="title">商户注册</div>

    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item 
        label="姓名"
        prop="store_name"
        maxlength="10"
        show-word-limit
        :rules="[
          { required: true, message: '请输入姓名'},
        ]">
        <el-input v-model="form.store_name" placeholder="请输入姓名" > </el-input>
      </el-form-item>
      <el-form-item 
        label="身份证号"
        prop="store_phone"
        maxlength="10"
        show-word-limit
        :rules="[
          { required: true, message: '请输入身份证号'},
        ]">
        <el-input v-model="form.store_phone" placeholder="请输入身份证号" > </el-input>
      </el-form-item>

      <el-form-item 
        label="商户名称"
        prop="name"
        maxlength="10"
        show-word-limit
        :rules="[
          { required: true, message: '请输入商户名称'},
        ]">
        <el-input v-model="form.name" placeholder="请输入商户名称" > </el-input>
      </el-form-item>

      <el-form-item 
        label="商户账号/手机号"
        prop="account"
        :rules="[
          { required: true, message: '请输入商户账号'},
          { validator: validateFn(/^\d{11}$/,'请输入11位数字'), trigger: 'blur' }
        ]">
        <el-input v-model="form.account" placeholder="请输入商户账号" > </el-input>
      </el-form-item>

      <el-form-item 
        label="登录密码"
        prop="password"
        :rules="[
          { required: true, message: '请输入登录密码', trigger: 'blur'},
          { validator: validateFn(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6}$/,'必须包含数字和字母，长度6位数'), trigger: 'blur' }
        ]">
        <el-input v-model="form.password" placeholder="请输入登录密码" > </el-input>
      </el-form-item>

       <el-form-item 
        label="上传营业执照"
        prop="business_image"
        :rules="[
          { required: true, message: '请上传营业执照'},
        ]">
        <!-- <el-input v-model="form.business_image" placeholder="请输入" > </el-input> -->
        <el-upload list-type="picture-card" :action="upLoadUrl" :headers="myHeaders" :limit="1"
             :on-success="handleSuccess" :on-exceed="handleExceed" :before-upload="beforeUpload">
            <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item 
        label="营业执照名称"
        prop="business_name"
        :rules="[
          { required: true, message: '请输入营业执照名称'},
        ]">
        <el-input v-model="form.business_name" placeholder="请输入营业执照名称" :disabled="!form.business_name"> </el-input>
      </el-form-item>

      <el-form-item 
        label="法人姓名"
        prop="legal_name"
        :rules="[
          { required: true, message: '请输入法人姓名'},
        ]">
        <el-input v-model="form.legal_name" placeholder="请输入法人姓名"  :disabled="!form.business_address"> </el-input>
      </el-form-item>

      <el-form-item 
        label="营业执照地址"
        prop="business_address"
        :rules="[
          { required: true, message: '请输入营业执照地址'},
        ]">
        <el-input v-model="form.business_address" placeholder="请输入营业执照地址"  :disabled="!form.business_address"> </el-input>
      </el-form-item>

      
      <el-form-item 
      label="营业项目"
      prop="business"
      :rules="[
          { required: true, message: '请输入营业项目'},
        ]">
        <el-input v-model="form.business" placeholder="请输入营业项目" :disabled="!form.business"> </el-input>
      </el-form-item>
      
      <el-form-item 
        label="联系电话"
        prop="business_phone"
        :rules="[
          { required: true, message: '请输入联系电话'},
        ]">
        <el-input v-model="form.business_phone" placeholder="请输入联系电话" > </el-input>
      </el-form-item>
      
      <el-form-item 
        label="银行卡"
        prop="business_bank"
        :rules="[
          { required: true, message: '请输入银行卡'},
        ]">
        <el-input v-model="form.business_bank" placeholder="请输入银行卡" > </el-input>
      </el-form-item>

      <el-form-item 
        label="开户行"
        prop="business_opening"
        :rules="[
          { required: true, message: '请输入开户行'},
          { validator: validateFn(/^[\u4e00-\u9fa5]+$/,'只能输入文字'), trigger: 'blur' }
        ]">
        <el-input v-model="form.business_opening" placeholder="请输入开户行" > </el-input>
      </el-form-item>

      <el-form-item 
        label="上传合同"
        prop="files"
        :rules="[
          { required: true, message: '请上传上传合同'},
        ]">
        <el-upload list-type="picture-card" :action="filesUrl" :headers="myHeaders" :limit="1"
             :on-success="handleHtSuccess" :on-exceed="handleExceed" :before-upload="beforeUpload">
            <i class="el-icon-plus"></i>
        </el-upload>
        <!-- <el-input v-model="form.business" placeholder="请输入" > </el-input> -->
      </el-form-item>


      <el-form-item>
        <el-button type="success" @click="onSubmit" :loading="isLoading">注册</el-button>
      </el-form-item>
    </el-form>

    <!-- <el-upload list-type="picture-card" :action="upLoadUrl" :headers="myHeaders" :limit="1" :on-remove="handleRemove"
      :on-success="handleSuccess" :on-exceed="handleExceed" :before-upload="beforeUpload">
      <i class="el-icon-plus"></i>
    </el-upload> -->
  </div>
</template>

<script>
import setting from "~/setting";
export default {
  name: "businessRegister",
  auth: false,
  fetch({ store }) {
    store.commit('isHeader', false);
    store.commit('isFooter', false);
  },
  data() {
    return {
      upLoadUrl: setting.apiBaseURL + "/register/upload",
      filesUrl: setting.apiBaseURL + "/register/files",
      myHeaders: {},
      form: {
        store_name: undefined,
        store_phone: undefined,
        name: undefined,
        account:undefined,
        business_name: undefined,
        business_image: undefined,
        business_address: undefined,
        business_phone: undefined,
        business_bank: undefined,
        password: undefined,
        business_opening: undefined,
        legal_name: undefined,
        business: undefined,
        files:undefined
      },
      isLoading: false,
    }
  },
  created() {
    // Object.keys(this.form).forEach(i => {
    //   this.form[i] = 1
    // })

    this.unique = this.$route.query.unique;
    let local = this.$cookies.get("auth.strategy");
    this.myHeaders = {
      Authorization: this.$cookies.get(`auth._token.${local}`),
    };
  },
  methods: {
    // 校验密码
    // validatePassword(rule, value, callback) {
    //     if (!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6}$/.test(value)) {
    //       callback(new Error('必须包含数字和字母，长度6位数'));
    //     } else {
    //       callback();
    //     }
    // },
    validateFn(reg,errorText) {
      return (rule,value,callback) => {
        if (!reg.test(value)) {
          callback(errorText)
        } else {
          callback()
        }
      }
    },
    handleExceed() {
      this.$message.warning("最多上传1张图片");
    },
    handleHtSuccess(res) {
      console.log(res)
      if (res.status === 200) {
        this.form.files = res.data.data
      } else {
        this.$message.error(res.msg);
      }
    },
    handleSuccess(response) {
      if (response.status === 200) {
        if (!response.data) return
        this.form.business_image = response.data.file
        console.log(this.form)
        
        const { name, person, address,business } = response.data.data //名称 法人 地址 信用代码

        this.form.business_name = name
        this.form.legal_name = person
        this.form.business_address = address
        this.form.business = business
      } else {
        this.$message.error(response.msg);
      }
    },
    beforeUpload(file) {
      const isImage = file.type === "image/jpeg" || file.type === "image/png";
      if (!isImage) {
        this.$message.error("上传图片只能是 JPG、PNG 格式!");
      }
      return isImage;
    },
    onSubmit() {
      // console.log(this.form);
      // return
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // https://w.19lai.com/api/register/loginregister 
          const { form } = this
          try {
            const res = await this.$axios.post('https://w.19lai.com/api/register/loginregister',{...form})
            console.log('submit success', res)
            this.$message.success(res.msg)
            setTimeout(() => {
              this.$router.push({ path: "/" });
            },500)
          } catch (msg) {
            console.log('catch error', msg)
            this.$message.error(msg)
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
      console.log(this.form)
      // this.isLoading = true
    },
    ajaxRegister() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.business-register {
  .title {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
