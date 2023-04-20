<template>
<CRow>
  <CCol style="
    text-align: right;
    margin-bottom: 20px;
    margin-right: 10px;
">
    <CButton color="primary">
                      Create
                    </CButton>
  </CCol>
</CRow>
  <CRow>
    <CCol :xs="12">
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Mô Tả</CTableHeaderCell>
            <CTableHeaderCell scope="col">Giá</CTableHeaderCell>
            <CTableHeaderCell scope="col">Hình Ảnh</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tác Vụ</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(item, index) in data" :key="index">
            <CTableHeaderCell scope="row">{{ item.id }}</CTableHeaderCell>
            <CTableDataCell>{{ item.name }}</CTableDataCell>
            <CTableDataCell>{{ item.description }}</CTableDataCell>
            <CTableDataCell>{{ item.price }}</CTableDataCell>
            <CTableDataCell><img style="width: 100px" :src="item.image"></CTableDataCell>
            <CTableDataCell>
              <CIcon icon="cil-pencil" />
              <span style="margin-left: 5px">x</span>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Tables',
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'Cho thuê nhà bạt mái',
          description: 'Chuyên cho thuê nhà bạt và nhà bạt mái nhựa trong tổ chức sự kiện và tổ chức đám cưới ngoài trời, liên hệ Công Nghệ Cưới để nhận tư vấn và báo giá lắp nhà bạt mái nhựa trong theo yêu cầu',
          price: 500000,
          image: 'https://dichvucuoihoi.vn/wp-content/uploads/2022/09/Nha-bat-mai-nhua-trong-6LuxuryEvent.vn_-350x263.jpg',
        },
        {
          id: 2,
          name: 'Cho thuê bộ bàn tròn ghế inox',
          description: 'Cho thuê bộ bàn tròn phủ khăn gấm sang trọng và 10 ghế inox dành cho cưới hỏi và sự kiện khác',
          price: 700000,
          image: 'https://dichvucuoihoi.vn/wp-content/uploads/2021/12/Cho-thue-ban-tron-ghe-inox-350x263.jpg',
        },
        {
          id: 3,
          name: 'Cho thuê ghế nệm bọc áo ghế',
          description: 'Cho thuê ghế nệm có lưng tựa bọc áo ghế và cột nơ ghế sang trọng có nhiều màu, giá tốt cho thuê số lượn nhiều vui lòng liên hệ',
          price: 800000,
          image: 'https://dichvucuoihoi.vn/wp-content/uploads/2019/05/Cho-Thue-Ban-Ghe.jpg',
        },
        {
          id: 4,
          name: 'Âm thanh chuyên nghiệp',
          description: 'Cho thuê âm thanh ánh sáng ban nhạc.',
          price: 900000,
          image: 'https://dichvucuoihoi.vn/wp-content/uploads/2019/05/am-thanh-300x168.jpg',
        },
        {
          id: 5,
          name: 'Bộ bàn tròn ghế nhựa',
          description: 'Bộ bàn tròn phủ khăn sang trọng',
          price: 1200000,
          image: 'https://dichvucuoihoi.vn/wp-content/uploads/2019/08/Ban-ghe-nhua.jpg',
        },
      ],
    }
  },
}
</script>
