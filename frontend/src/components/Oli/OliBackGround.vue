<template>
  <canvas id="oli-bg" :class="{ 'red-filter': beginAgain }"></canvas>
</template>

<script>
export default {
  name: "OliBackGround",
  components: {},
  computed: {
    beginAgain() {
      return this.$store.state.beginAgain;
    },
  },
  mounted() {
    let canvas, ctx, w, h, circles;
    let colors = [
      [100, 184, 209],
      [189, 220, 227],
      [15, 56, 96],
      [20, 113, 159],
      [255, 184, 28],
    ];
    // let colors = [[128, 128, 128]];
    function init() {
      canvas = document.querySelector("#oli-bg");

      ctx = canvas.getContext("2d");
      resizeReset();
      animationLoop();
    }
    function resizeReset() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      circles = [];
      createObject();
    }

    function createObject() {
      for (let i = 0; i < 223; i++) {
        circles.push(new Circle(i));
      }
    }

    function animationLoop() {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      drawScene();
      requestAnimationFrame(animationLoop);
    }

    function drawScene() {
      circles.map((circle) => {
        circle.update();
        circle.draw();
      });
    }

    function easeInOutQuad(x) {
      return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    }

    class Circle {
      constructor(i) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.radius = Math.random() * 75 + 1;
        this.color = colors[i % colors.length];
        this.alpha = Math.random() * 0.4 + 0.05;
        if (i % colors.length === 4) {
          this.x = Math.random() * w - 100;
          this.y = Math.random() * h - 100;
          this.radius = Math.random() * 10 + 5;
          this.alpha = Math.random() * 0.2 + 0.45;
        }
        this.tick = 0;
        this.ttl = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        if (this.tick >= this.ttl) {
          this.setTarget();
        }
        let progress = this.tick / this.ttl;
        this.x =
          this.startX + (this.targetX - this.x) * easeInOutQuad(progress);
        this.y =
          this.startY + (this.targetY - this.y) * easeInOutQuad(progress);
        this.tick += 1;
      }

      setTarget() {
        this.startX = this.x;
        this.startY = this.y;
        this.targetX = this.x + (Math.random() * 200 - 100);
        this.targetY = this.y + (Math.random() * 200 - 100);
        this.tick = 0;
        this.ttl = Math.random() * 180 + 180;
      }
    }

    init();
  },
};
</script>

<style scoped>
#oli-bg {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  z-index: 0;
}

.red-filter {
  filter: hue-rotate(170deg);
}
</style>
