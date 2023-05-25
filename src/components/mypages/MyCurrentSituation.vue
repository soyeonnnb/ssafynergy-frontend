<template>
  <div class="situation-calendar-view">
    <FullCalendar :options="calendarOptions" class="situation-calendar" />
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { mapState } from "vuex";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        // dateClick: this.handleDateClick,
        events: [], // title, start, end
      },
      colors: [
        "#3D81C1",
        "#FFBC5B",
        "#563DC1",
        "#89C13D",
        "#E85778",
        "#3DC174",
        "#3DC1A7",
        "#9C38CE",
        "#FF785B",
        "#E857C5",
      ],
    };
  },
  computed: {
    ...mapState(["participateChallengeList", "user"]),
  },
  created() {
    this.$store.dispatch("getParticipatedChallengeList", this.user.id);
  },
  watch: {
    participateChallengeList() {
      let list = [];
      for (let i = 0; i < this.participateChallengeList.length; i++) {
        let chall = {};
        chall.title = this.participateChallengeList[i].name;
        chall.start = this.participateChallengeList[i].startAt.substring(0, 10);
        chall.end = this.getNextDate(
          this.participateChallengeList[i].finishAt.substring(0, 10)
        );
        chall.color = this.colors[i % 10];
        list.push(chall);
      }
      this.calendarOptions.events = list;
    },
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
    getNextDate(str) {
      const arr = str.split("-");
      let date = new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));
      let tomorrow = new Date(date.setDate(date.getDate() + 1));
      console.log(tomorrow);
      let result = tomorrow.getFullYear() + "-";
      if (tomorrow.getMonth() + 1 < 10) {
        result += "0";
      }
      result += tomorrow.getMonth() + 1 + "-";
      if (tomorrow.getDate() < 10) {
        result += "0";
      }
      result += tomorrow.getDate();
      return result;
    },
  },
};
</script>

<style scoped>
.situation-calendar-view {
  width: 100%;
}
.situation-calendar {
  width: 100%;
  /* background-color: aquamarine; */
}
</style>
