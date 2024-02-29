<template>
    <div class="page-content">
            <div class="m-page-header">
                <div class="m-page-title">Nhân viên</div>
                <div class="m-page-button">
                    <button id="btn-add" class="m-btn ">Thêm mới nhân viên</button>
                </div>
            </div>
            <div class="m-page-toolbar">
                <div class="m-toolbar-left">
                    <input id="txtSearch" class="m-input m-btn-icon-right m-icon-search" placeholder="Tìm theo mã,tên nhân viên" style="width: 200px;"/>
                </div>
                <div class="m-toolbar-right">
                    <button id="reload" class="m-icon-refresh"></button>
                </div>
            </div>
            <div class="m-page-grid">
                    <div class="m-grid">
                        <table id="tblEmployee" class="m-table">
                            <thead>
                             <tr>
                                <th><input type="checkbox" class="m-select-row"></th>
                                 <th class="m-employee-code">MÃ NHÂN VIÊN</th>
                                 <th class="m-employee-name">TÊN NHÂN VIÊN</th>
                                 <th class="m-gender">GIỚI TÍNH</th>
                                 <th class="m-dateOfbrith">NGÀY SINH</th>
                                 <th class="m-identityCode">SỐ CMND</th>
                                 <th class="m-position">CHỨC DANH</th>
                                 <th class="m-department-name">TÊN ĐƠN VỊ</th>
                                 <th class="m-account">SỐ TÀI KHOẢN</th>
                                 <th class="m-bank-name">TÊN NGÂN HÀNG</th>
                                 <th class="m-branch">CHI NHÁNH TK NGÂN HÀNG</th>
                                 <th class="m-option">CHỨC NĂNG</th>
                             </tr>       
                            </thead>     
                            <tbody>
                                    <tr v-for="employee in employees" :key="employee.EmployeeId">
                            <td class="m-content-center" ><input type="checkbox" class="m-table-select"></td>
                            <td class="m-content-left">{{employee.EmployeeCode}}</td>
                            <td class="m-content-left">{{employee.EmployeeName }}</td>
                            <td class="m-content-left">{{ formatGender(employee.Gender) }}</td>
                            <td class="m-content-center">{{ formatDate(employee.DateOfBrith )}}</td>
                            <td class="m-content-left" >{{ employee.IdentityCode }}</td>
                            <td class="m-content-left">{{ employee.Position }}</td>
                            <td>{{employee.DepartmentName }}</td>
                            <td>{{ employee.BankAccount }}</td>
                            <td>{{ employee.BankName }}</td>
                            <td>{{ employee.Branch }}</td>
                            <td class="m-content-center">
                            <div class="m-show-options m-content-center">
                                    <div class="m-btn-show">
                                        <div><label id="editemployee" class="edit-employee" for="">Sửa</label></div>
                                        <div><button id="m-show" class="m-show m-icon-show-options">
                                        </button></div>
                                    </div> 
                                    
                            </div>
                            </td>
                                    </tr>
                            </tbody>
                            </table>
                    </div>
                   
                    <div class="m-page">
                        <div class="m-page-left">
                            <label for="" id="employeeNumber">Tổng số:</label>
                        </div>
                        <div class="m-page-right">
                            <div class="m-number-page">
                                <select name="" id="">
                                    <option>10 bản ghi trên 1 trang</option>
                                    <option>20 bản ghi trên 1 trang</option>
                                    <option>30 bản ghi trên 1 trang</option>
                                    <option>50 bản ghi trên 1 trang</option>
                                    <option>100 bản ghi trên 1 trang</option>
                                </select>
                            </div>
                            <div class="m-number">
                                <label for="">Trước</label>
                                <button class="m-page-selected">1</button>
                            <button >2</button>
                            <button >3</button>
                            <button >4</button>
                            <label for="">Sau</label>
                            </div>
                           
                        </div>
                    </div>   
            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "EmployeeList",
  components:{},
  //giai đoạn 1 beforeCreate 
  beforeCreate(){
    console.log("beforeCreate");
    
  },
  //giai đoạn 2 created 
  created(){
    // console.log("Created");
    // let name= this.fullName;
    // console.log(name);
    try{
        var me=this;
        axios.get("https://localhost:7159/api/v1/Employees/employees").then((response)=>{
            console.log(response.data);
            me.employees=response.data;
        });
    }
    catch(error){
        console.log(error);
    }
   
  },
  //giai đoạn 3 beforeMount 
  beforeMount(){

  },
  //giai đoạn 4 mounted
  mounted(){

  },
  //giai đoạn 5 beforeUpdate 
  beforeUpdate(){

  },
  //giai đoạn 6 updated
  updated(){

  },
  methods:{
    formatDate(dob)
    {
        if(dob)
        {
            dob= new Date(dob);
            let date= dob.getDate();
            date =date<10 ?  `0${date}`:date;
            // lấy ngày 
            let month= dob.getMonth()+1;
            // lấy tháng
            month= month <10 ? `0${month}`:month;
            let year = dob.getFullYear();
            //lấy giá trị là ngày tháng năm
            dob= `${date}/${month}/${year}`;
        }
        else{
            dob = "";
        }
        return dob;
    },
    formatGender(gender){
        if(gender==1)
        return "Nam";
        else if(gender==0)
        return "Nữ";
        else
        return "Chưa xác định"
    }
            

  },
  data(){
    return {
        fullName:"Bui Viet Hoang",
        employees:null,
    };
  },

};
</script>
<style>
@import url("../../style/layout/content.css");
@import url("../../style/page/employ.css");
</style>