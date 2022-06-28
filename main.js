var app = new Vue({
  el: "#app",
  data: {
    isAuto: true,
    selectedId: "",
    newPixelList: [],
    conversionApi: false,
    isMissing: false,
    listBusinessAccount: [
      {
        id: 255697,
        name: "Account 1",
      },
      {
        id: 582235,
        name: "Account 2",
      },
      {
        id: 9789564,
        name: "Account 3",
      },
      {
        id: 524756,
        name: "Account 4",
      },
    ],
    listPixelAccount: [
      {
        id: 1,
        parentId: 255697,
        name: "Pixel 1",
      },
      {
        id: 2,
        parentId: 582235,
        name: "Pixel 2",
      },
      {
        id: 3,
        parentId: 582235,
        name: "Pixel 3",
      },
      {
        id: 4,
        parentId: 255697,
        name: "Pixel 4",
      },
      {
        id: 5,
        parentId: 9789564,
        name: "Pixel 5",
      },
      {
        id: 6,
        parentId: 255697,
        name: "Pixel 6",
      },
      {
        id: 7,
        parentId: 582235,
        name: "Pixel 7",
      },
      {
        id: 8,
        parentId: 9789564,
        name: "Pixel 8",
      },
      {
        id: 9,
        parentId: 255697,
        name: "Pixel 9",
      },
      {
        id: 10,
        parentId: 582235,
        name: "Pixel 10",
      },
      {
        id: 11,
        parentId: 9789564,
        name: "Pixel 11",
      },
      {
        id: 12,
        parentId: 255697,
        name: "Pixel 12",
      },
    ],
  },
  methods: {},
  watch: {
    isAuto: function () {
      if (this.isAuto == "true") {
        this.isAuto = true;
      } else if (this.isAuto == "false") {
        this.isAuto = false;
      }
    },
    selectedId: function () {
      this.newPixelList = this.listPixelAccount.filter((Pixel) => {
        return Pixel.parentId === this.selectedId;
      });
      if (this.newPixelList.length === 0) {
        this.isMissing = true;
      } else {
        this.isMissing = false;
      }
    },
  },
});
