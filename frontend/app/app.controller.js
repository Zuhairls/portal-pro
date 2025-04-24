angular.module('FlagApp').controller('MainController', function ($scope, FlagService) {
    const vm = this;
    vm.candidate = {};
    vm.flags = [];
  
    // Load saved data from localStorage (mock persistence)
    const saved = localStorage.getItem('candidate');
    if (saved) {
      vm.candidate = JSON.parse(saved);
    }
  
    vm.evaluateCandidate = function () {
      FlagService.evaluate(vm.candidate).then(function (res) {
        vm.flags = res.data.flags;
  
        // Save candidate input
        localStorage.setItem('candidate', JSON.stringify(vm.candidate));
      }).catch(function (err) {
        console.error("API Error:", err);
        alert("Error evaluating candidate. Please try again.");
      });
    };
  
    vm.overrideFlag = function (flag) {
        if (!flag.overridden) {
          flag.overridden = true;
          flag.message += " (overridden)";
          flag.severity = "low";
        }
      };
      vm.exportFlags = function () {
        const blob = new Blob([JSON.stringify(vm.flags, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${vm.candidate.name}_flags.json`;
        a.click();
      };
        
  });
  