
var app = new Vue({
    el: '#app',
    data: {
        // filteredQA: [],
        filter_q: '',
    },
    computed: {
        filteredQA: function () {
          var self = this
          return qas.filter(function (qa) {
            return qa.q.indexOf(self.filter_q) !== -1
          })
        }
      }
});

