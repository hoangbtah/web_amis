<template>
     <div id="dialogadd" class="m-dialog"
      v-bind:class="{'isShowDialog':isShow}">
                
                <div class="m-dialog-content">
                    <div class="m-dialog-header">
                        <div class="m-dialog-title">
                            Thông tin nhân viên
                        </div>
                        <div class="m-dialog-khachhang">
                            <input type="checkbox"/>
                            <label for="">Là khách hàng</label>
                        </div>
                        <div class="m-dialog-ncc">
                            <input type="checkbox"/>
                            <label for="">Là nhà cung cấp</label>
                        </div>
                        <button id="dialog-close" class="m-dialog-close m-icon-cancel">
                                
                        </button>
                    </div>
                    <div class="m-dialog-body">
                        <div class="m-row-1">
                           <div class="m-row-1-left">
                            <div class="m-dialog-employcode">
                                <div><label for="">Mã</label><i class="required">*</i></div>
                                <div><input class="m-input" id="txtEmployeeCode" type="input" required v-model=" employee.employeeCode"></div>
                            </div>
                            <div class="m-dialog-employee-name">
                                <div><label for="">Tên<i class="required">*</i></label></div>
                                <div><input id="txtEmployeeName" class="m-input loaddel"  type="input" required v-model="employee.employeeName"></div>
                            </div>
                           </div>
                           <div class="m-row-1-right">
                            <div class="m-dialog-employee-dob">
                                <div><label for="">Ngày sinh</label></div>
                                <div><input class="m-input"  type="date" id="txtDateOfBrith"></div>
                            </div>
                            <div class="m-dialog-employee-gender">
                                <div><label for="">Giới tính</label></div>
                                <div style="display: flex; height: 40px;justify-content: center;align-items: center;">
                                    <input class="gender" type="radio" value="1" id="txtMale" name="gender"><label for="">Nam</label> 
                                    <input class="gender" type="radio" value="0" id="txtFemale" name="gender"><label for="">Nữ</label>
                                    <input class="gender" type="radio" value="2" id="txtOther" name="gender"><label for="">Khác</label>
                                </div>
                            </div>
                           </div>
                        </div>
                        <div class="m-row-2">
                            <div class="m-dialog-donvi">
                                <div><label for="">Đơn vị <i class="required">*</i></label></div>
                                <div>
                                   
                                <select id="department" name="department"></select>
                            </div>
                            </div>
                            <div class="m-dialog-cmnd">
                                <div><label for="">Số CMND</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtIdentityCode"></div>
                            </div>
                            <div class="m-dialog-ngay-cap">
                                <div><label for="">Ngày cấp</label></div>
                                <div><input class="m-input loaddel"  type="date" name="" id="txtIdentityDate"></div>
                            </div>
                        </div>
                        <div class="m-row-3">
                            <div class="m-dialog-chuc-danh">
                                <div><label for="">Chức danh</label></div>
                                <div><input  class="m-input loaddel" type="text" id="txtPosition"></div>
                            </div>
                            <div class="m-dialog-noi-cap">
                                <div><label for="">Nơi cấp</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtIdentityPlace"></div>
                            </div>
                        </div>
                        <div class="m-row-4">
                            <div class="m-dialog-address">
                                <div><label for="">Địa chỉ</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtAddress"></div>
                            </div>
                        </div>
                        <div class="m-row-5">
                            <div class="m-dialog-phone-number">
                                <div><label for="">Điện thoại di đông</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtPhoneNumber"></div>
                            </div>
                            <div class="m-dialog-phone">
                                <div><label for="">Điện thoại cố định</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtPhone"></div>
                            </div>
                            <div class="m-dialog-email">
                                <div><label for="">Email</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtEmail"></div>
                            </div>
                        </div>
                        <div class="m-row-6">
                            <div class="m-dialog-phone-account-bank">
                                <div><label for="">Tài khoản ngân hàng</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtAccountBank"></div>
                            </div>
                            <div class="m-dialog-bank-name">
                                <div><label for="">Tên ngân hàng</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtBankName"></div>
                            </div>
                            <div class="m-dialog-chi-nhanh">
                                <div><label for="">Chi nhánh</label></div>
                                <div><input class="m-input loaddel"  type="text" id="txtBranch"></div>
                            </div>
                        </div>
                    </div>
                    <div class="m-dialog-footer">
                       <div class="m-dialog-footer-left"> <button id="m-btn-add-cancle" class="m-btn m-btn-nocolor" @click="btnClose">Hủy</button></div>
                        <div class="m-dialog-footer-right">
                            <button id="btnSave" class="m-btn m-btn-nocolor m-btn-cat" @click="btnSave">Cất</button>
                            <button id="btnSaveAndAdd" class="m-btn">Cất và thêm</button>
                        </div>
                    </div>
                </div>
          
        </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EmployeeDetail",
  components: {},
  /*các phương thức
    */
  methods: {
    btnClose() {
      // document.getElementById("dialogadd").style.display="none";
      // this.isShow=false;
      this.$emit("isShowDialog", false);
    },
    btnSave(){
       // var me=this;
        //1.validate dữ liệu
        //2. build object thông tin nhân viên
        //3. gọi api thực hiện thêm mới
        //3.1 kiểm tra trạng thaasi thêm mới hay sửa 
        if(this.forMod==1)
        {
            // axios.post("https://localhost:7159/api/v1/Employees/",me.employee)
            // .then(function(){
                alert("thêm thành công");
                // ẩn form đi
                //loading lại dữ liệu
            // })
            // .catch(function(){})
        }
        else{
            // axios.put(`https://localhost:7159/api/v1/Employees/${me.employeeSelectedId}`,me.employee)
            // .then(function(){
                alert("sửa thành công");
                // ẩn form đi
                //loading lại dữ liệu
            // })
            // .catch(function(){})
        }
        // nếu thêm mới thành công thì hiển thị toast thêm mới thành công
        // nếu có lỗi validate hoặc lỗi từ back-end thì hiển thị thông báo tương ứng
    }
  },
  /**
   *
   */
  props: ["isShow", "employeeSelected", "employeeSelectedId","forMod"],
  watch: {
    employeeSelected:function(value){
        //this.employee=value;
        console.log(value);
        },
    employeeSelectedId: function(value) {
      // alert(value);
      console.log(value);
      var me=this;
      if (value) {
        //gọi api lấy dữ liệu
        // hiển thị loading dữ liệu
        axios
          .get(
            `https://localhost:7159/api/v1/Employees/${this.employeeSelectedId}`
          )
          .then(function(response) {
            switch (response.status) {
              case 200:
               me.employee = response.data;
                break;
              case 201:
                break;
              default:
            }
            console.log(response);
          })
          .catch(function(response) {
            switch (response.status) {
              case 400:
                break;
              case 404:
                break;
                default :

            }
            console.log(response);
            // ẩn loading dữ liệu
          });
      }
      else{
        //reset lại thông tin nhân viên
        me.employee={};
        // focus vào ô nhập liệu đầu tiên
        //gọi api lấy mã nhân viên mới 
        //axios.get("").then
      }
    }
  },
  data() {
    return {
      // isShow:false
      //không dùng data để hứng được mà phải dùng pros để hứng.
      employee: {}
    };
  }
};
</script>
<style scoped>
@import url("../../style/component/dialog.css");
</style>