<template>
  <tr>
    <td>{{ no }}</td>
    <td>{{ name }}</td>
    <td>{{ startAt }}</td>
    <td>{{ finishAt }}</td>
    <td>{{ description }}</td>
    <td>{{ limitPersonNum }}km</td>
  </tr>
</template>

<script>
export default {
  name: "ListRow",
  props: {
    // 상위 component로 부터 넘어온 자동차정보
    //   no: String,
    //   name: String,
    //   startAt: String,
    //   finishAt: String,
    //   description: String,
    //   limitPersonNum: String,
  },
  methods: {},
};
</script>
