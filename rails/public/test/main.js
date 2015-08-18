// Generated by CoffeeScript 1.6.3
(function() {
  requirejs.config({
    baseUrl: 'js',
    paths: {
      jquery: "/test/jquery-1.9.1.min",
      d3: '/test/d3.v3.min',
      sylvester: "/test/sylvester-loader",
      backbone: "/test/backbone-min",
      underscore: "/test/underscore-min",
      processing: "/test/processing-1.4.1.min",
      vector: "/test/vector",
      zepto: "/test/zepto.min",
      modernizr: "/test/modernizr",
      paper: "/test/paper",
      tween: "/test/Tween",
      "state-machine": "/test/state-machine.min",
      pubsub: "/test/pubsub",
      facebook: '//connect.facebook.net/fr_FR/all.js#xfbml=1'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      d3: {
        exports: 'd3'
      },
      processing: {
        exports: 'Processing'
      },
      vector: {
        exports: 'Vector'
      },
      zepto: {
        exports: 'Zepto'
      },
      modernizr: {
        exports: 'Modernizr'
      },
      paper: {
        exports: 'paper'
      },
      tween: {
        exports: 'TWEEN'
      },
      facebook: {
        exports: 'FB'
      }
    }
  });

  require([(typeof window !== "undefined" && window !== null ? window.mainScript : void 0) || "application"]);

}).call(this);
