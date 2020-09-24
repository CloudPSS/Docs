---
layout: index
full_footer: true
sidebar: false
type: ''
---

{% raw %}

<link href="index/app.css" rel="stylesheet" />
<div id="vueindex">
  <div class="parallax"></div>
  <section class="intro">
    <h1 id="title">帮助文档</h1>
    <p>
      CloudPSS是一款面向能源互联网的建模仿真平台，其采用完全自主研发的电磁暂态仿真内核，利用云端的异构并行计算资源，为用户提供面向交直流混联电网、可再生能源发电、微电网、配电网、供热网等多种能源网络的建模及仿真分析功能。
    </p>
  </section>
  <section class="links">
    <div class="container center">
      <div class="card-panel" v-for="item in links">
        <span role="img" :style="{'background-image': `url(${encodeURI(item.img)})`}"></span>
        <div>
          <h3>{{item.name}}</h3>
          <p class="desc">{{item.desc}}</p>
          <ul>
            <li v-for="li in item.more" :title="li.name">
              <a :target="li.openNew ? '_blank' : '_self'" rel="noopener" :href="li.link">{{li.name}}</a>
              <p>{{li.desc}}</p>
            </li>
          </ul>
        </div>
        <a
          :target="item.action.openNew ? '_blank' : '_self'"
          :title="item.action.desc"
          rel="noopener"
          :href="item.action.link"
          class="button"
          >{{item.action.name}}</a
        >
      </div>
    </div>
  </section>
</div>
<script src="index/app.js"></script>

{% endraw %}