<template>
<CRow>
    <CCol :xs="2">
      <DayPilotNavigator id="nav" :config="navigatorConfig" ref="navigator" :events="events"/>
    </CCol>
    <CCol :xs="10">
      <DayPilotCalendar id="dp" :config="calendarConfig" ref="calendar" :events="events"/>
      <DayPilot />
    </CCol>
  </CRow>
</template>

<script>
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from '@daypilot/daypilot-lite-vue'

export default {
  components: {
    DayPilotCalendar,
    DayPilotNavigator,
    DayPilot
  },
  name: 'ResourceCalendar',
  data: function() {
    return {
      calendarConfig: {
        viewType: "Week",
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: async (args) => {
          await this.createEvent(args.start, args.end, args.resource);
          this.calendar.clearSelection();
        },
      },
      navigatorConfig: {
        selectionDay: "2023-04-11",
        showMonths: 2,
        skipMonths: 0,
        selectMode: "Day",
        onTimeRangeSelected: args => {
        this.calendarConfig.startDate = args.day;
      }
    },
    }
  },
  computed: {
    navigator() {
      return this.$refs.navigator.control;
    },
    calendar() {
      return this.$refs.calendar.control;
    },
  },
  methods: {
    async createEvent(start, end, resource) {
      const form = [
        {name: "Mô Tả", id: "text"},
        {name: "Thời Gian Bắt Đầu", id: "start", type: "datetime", disabled: true},
        {name: "Thời Gian Bắt Đầu", id: "end", type: "datetime", disabled: true},
        {name: "Dịch Vụ", id: "resource", type: "select", options: [
          {
            'name': 'Xe',
            'id': 1
          },
          {
            'name': 'Trang Trí Gia Tiên',
            'id': 2
          },
          {
            'name': 'Thiết Bị',
            'id': 3
          }
        ]},
        {name: "Khách Hàng", id: "resource", type: "select", options: [
          {
            'name': 'David Beckham',
            'id': 1
          },
          {
            'name': 'Neymar',
            'id': 2
          },
          {
            'name': 'Ronaldo',
            'id': 3
          },
          {
            'name': 'Messi',
            'id': 4
          }
        ]}
      ];
      const data = {
        start,
        end,
        resource,
        id: DayPilot.guid()
      };
      const modal = await DayPilot.Modal.form(form, data);
      if (modal.canceled) {
        return;
      }

      const e = modal.result;
      this.calendar.events.add(e);
    },
    loadEvents() {
      // placeholder for an HTTP call
      const events = [
        {
          id: 1,
          start: "2023-04-20T10:00:00",
          end: "2023-04-20T11:00:00",
          text: "Wedding Neymar",
          barColor: "#6aa84f",
        },
        {
          id: 2,
          start: "2023-04-21T13:00:00",
          end: "2023-04-21T15:00:00",
          text: "Wedding Ronaldo",
          barColor: "#f1c232",
        },
        {
          id: 3,
          start: "2023-04-18T13:00:00",
          end: "2023-04-18T14:00:00",
          text: "Wedding Messi",
          barColor: "red",
        },
        // ...
      ];
      this.calendar.update({events});
      this.navigator.update({events});
    },
  },
  mounted() {
    this.loadEvents();
  }
}
</script>