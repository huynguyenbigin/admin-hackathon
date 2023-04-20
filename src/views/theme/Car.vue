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
            <CTableHeaderCell scope="col">Tên Xe</CTableHeaderCell>
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
          name: 'Toyota Vios',
          description: 'Toyota Vios là mẫu xe sedan cỡ nhỏ thuộc phân khúc B của Toyota luôn chiếm vị trí số 1 về doanh số trong nhiều năm',
          price: 500000,
          image: 'https://xeducvinh.com.vn/wp-content/uploads/2021/10/xe-cuoi-toyoa-vios-300x200.jpg',
        },
        {
          id: 2,
          name: 'Toyota Altis',
          description: 'Toyota Altis là mẫu xe của nhật, chiếm lĩnh thị trường Việt Nam với rất nhiều tính năng nổi bật, là thế hệ đàn anh của Toyota Vios',
          price: 700000,
          image: 'https://xeducvinh.com.vn/wp-content/uploads/2021/10/xe-cuoi-toyoa-vios-300x200.jpg',
        },
        {
          id: 3,
          name: 'Vinfast',
          description: 'Vinfast Lux 4 chỗ và 7 chỗ là dòng xe của Việt Nam mang đậm phong cách thiết kế sang trọng, hiện đại giữa Đức và Ý',
          price: 800000,
          image: 'https://xeducvinh.com.vn/wp-content/uploads/2021/10/xe-cuoi-vinfast-300x200.jpg',
        },
        {
          id: 4,
          name: 'Toyota Camry',
          description: 'Xe Camry là dòng xe được cô dâu chú rể yêu thích nhất trong các dòng xe Toyota hiện nay khi tìm kiếm xe hoa cưới',
          price: 900000,
          image: 'https://xeducvinh.com.vn/wp-content/uploads/2021/10/xe-cuoi-toyota-camry-300x200.jpg',
        },
        {
          id: 5,
          name: 'Hyundai Sonata',
          description: 'Sonata là dòng xe đến từ Hàn Quốc với kiểu dáng khá mềm mại, có các đường viền xe tinh tế',
          price: 1200000,
          image: 'https://xeducvinh.com.vn/wp-content/uploads/2021/10/xe-cuoi-hyundai-sonata-300x200.jpg',
        },
        {
          id: 6,
          name: 'Mercedes',
          description: 'Toyota Vios là mẫu xe sedan cỡ nhỏ thuộc phân khúc B của Toyota luôn chiếm vị trí số 1 về doanh số trong nhiều năm',
          price: 2000000,
          image: 'https://xeducvinh.com.vn/wp-content/uploads/2021/10/xe-cuoi-mercedes-300x200.jpg',
        },
      ],
    }
  },
}
</script>
