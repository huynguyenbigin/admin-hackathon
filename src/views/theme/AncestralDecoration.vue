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
    <CCol :xs="4" v-for="(item, index) in data" :key="index" class="mb-3">
      <div class="col-inner text-left" style="border: 1px solid darkgray; padding: 10px">
        <div
          class="is-border"
          style="
            border-color: rgb(255, 0, 0);
            border-width: 1px 1px 1px 1px0px;
            margin: 0px 5px 0px 5px;
          "
        ></div>

        <div id="text-3778359812" class="text">
          <CIcon icon="cil-pencil" style="float:right" />
          <h3>
            <span style="color: #d83131">{{item.name}}</span><br /><span
              style="color: #d83131"
              >{{item.description}}</span
            >
          </h3>
        </div>

        <div id="text-1362486427" class="text">
          <h5>
            <span style="font-size: 110%"
              ><strong
                >Giá: <del>{{item.old_price}}</del>&nbsp; còn {{item.price}}</strong
              ></span
            >
          </h5>
        </div>

        <div
          class="is-divider divider clearfix"
          style="
            margin-top: 5px;
            margin-bottom: 5px;
            max-width: 100%;
            height: 2px;
            background-color: rgb(111, 166, 212);
          "
        ></div>

        <ul>
          <li class="bullet-checkmark" v-for="(detail, index) in item.details" :key="index">
            {{detail}}
          </li>
        </ul>
        <div
          class="is-divider divider clearfix"
          style="
            margin-top: 5px;
            margin-bottom: 5px;
            max-width: 100%;
            height: 2px;
            background-color: rgb(111, 166, 212);
          "
        ></div>
      </div>
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
          name: 'GÓI HOME 01',
          description: 'TRANG TRÍ HOA TƯƠI TIÊU CHUẨN',
          old_price: '18.500.000',
          price: '14.800.000',
          details: [
            'Trang trí bộ phông bàn thờ tiêu chuẩn',
            'Trang trí bàn thờ và bộ lư đồng',
            'Trang trí bàn để mâm quả',
            'Trang trí bàn dài hai họ 12 khách',
            'Trang trí 2 bình hoa tươi để bàn dài',
            'Tách trà / nước suối / kệ sứ để bánh',
            'Ghế Tiffany 12 cái trang trí cột nơ',
            'Thiết kế bảng tên lễ kết hoa tươi',
            'Cổng 2,5m thiết kế 50% hoa tươi'
          ]
        },
        {
          id: 2,
          name: 'GÓI HOME 02',
          description: 'TRANG TRÍ HOA TƯƠI NÂNG CAO',
          old_price: '25.000.000',
          price: '22.500.000',
          details: [
            'Trang trí bộ phông bàn thờ nâng cao',
            'Trang trí bàn thờ và bộ lư đồng',
            'Trang trí bàn để mâm quả',
            'Trang trí bàn dài hai họ 12 khách',
            'Trang trí 3 bình hoa tươi để bàn dài',
            'Tách trà / nước suối / kệ sứ để bánh',
            'Ghế Tiffany 12 cái trang trí cột nơ',
            'Thiết kế bảng tên lễ kết hoa tươi',
            'Cổng 2,5m thiết kế 70% hoa tươi',
            'Thiết kế bảng welcome để cổng'
          ]
        },
        {
          id: 3,
          name: 'GÓI HOME 03',
          description: 'TRANG TRÍ HOA TƯƠI CAO CẤP',
          old_price: '39.000.000',
          price: '35.500.000',
          details: [
            'Trang trí bộ phông bàn thờ nâng cao',
            'Trang trí bàn thờ và bộ lư đồng',
            'Trang trí bàn để mâm quả',
            'Trang trí bàn dài hai họ 12 khách',
            'Trang trí Full hoa tươi bàn hai họ',
            'Tách trà / nước suối / kệ sứ để bánh',
            'Ghế Tiffany 12 cái trang trí cột nơ',
            'Thiết kế bảng tên lễ hoặc bộ chữ',
            'Cổng 2,5m trang trí Full hoa tươi',
            'Thiết kế bảng welcome để cổng'
          ]
        },
        {
          id: 4,
          name: 'GÓI HOA LỤA',
          description: 'TRANG TRÍ HOA LỤA HIỆN ĐẠI',
          old_price: '14.000.000',
          price: '10.500.000',
          details: [
            'Trang trí bộ phông bàn thờ hoa lụa',
            'Trang trí bàn thờ và bộ lư đồng',
            'Trang trí bàn để mâm quả',
            'Trang trí bàn dài hai họ 12 khách',
            'Trang trí 2 bình hoa tươi để bàn dài',
            'Tách trà / nước suối / kệ sứ để bánh',
            'Ghế Tiffany 12 cái trang trí cột nơ',
            'Thiết kế bảng tên lễ đính hoa lụa',
            'Cổng 2,5m trang trí Full hoa tươi',
            'Trang trí cổng 2,5m với hoa lụa'
          ]
        },
      ],
    }
  },
}
</script>
<style>
#col-1045305373 > .col-inner {
  margin: 0px 0px -30px 0px;
}
#text-1362486427 {
  text-align: center;
}
#text-3778359812 {
  text-align: center;
}
</style>
