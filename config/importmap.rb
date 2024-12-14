# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"

pin "chart.js", to: "https://cdn.jsdelivr.net/npm/chart.js@4.4.3/+esm"
# pin "chartjs-plugin-annotation", to: "https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@3.1.0/+esm"
pin "chartjs-plugin-annotation", to: "https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@2.2.0/+esm"