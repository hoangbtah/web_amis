<template lang="">
     <div class="navbar">
            <router-link to="/employee" class="menu-item menu-item-focus" >
                <div class="menu-icon m-icon-overview">   
                </div>
                <div class="menu-text">
                    Tổng quan
                </div>
           </router-link>
            <router-link class="menu-item" to="/report">
                <div class="menu-icon m-icon-cash">
                    
                </div>
                <div class="menu-text">
                    Tiền mặt
                </div>
            </router-link>
            <div class="menu-item">
                <div class="menu-icon m-icon-deposits">
                    
                </div>
                <div class="menu-text">
                    Tiền gửi
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-purchase">
                    
                </div>
                <div class="menu-text">
                    Mua hàng
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-sell">
                    
                </div>
                <div class="menu-text">
                    Bán hàng
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-invoice-management">
                    
                </div>
                <div class="menu-text">
                    Quản lý hóa đơn 
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-warehouse">
                    
                </div>
                <div class="menu-text">
                    Kho
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-tools">
                    
                </div>
                <div class="menu-text">
                    Công cụ dụng cụ
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-asset">
                    
                </div>
                <div class="menu-text">
                    Tài sản cố định
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-tax">
                    
                </div>
                <div class="menu-text">
                    Thuế
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-price">
                    
                </div>
                <div class="menu-text">
                    Giá thành
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-synthetic">
                    
                </div>
                <div class="menu-text">
                    Tổng hợp
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-budget">
                    
                </div>
                <div class="menu-text">
                    Ngân sách
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-notice">
                    
                </div>
                <div class="menu-text">
                    Báo cáo
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon m-icon-financial-analysis">
                    
                </div>
                <div class="menu-text">
                    Phân tích tài chính
                </div>
            </div>

        </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import url("../../style/layout/navbar.css");
.navbar a{
    text-decoration: none;
    color: unset;
}
</style>