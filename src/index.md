---
layout: layout.html
pageTitle: New York Today
tags: page
navTitle: Home
---

## Articles!

{% for page in collections.page %}

  <h2><a href="{{ page.url }}">{{ page.data.pageTitle }}</a></h2>
  <em>{{ page.date | date: "%Y-%m-%d" }}</em> <!--pipe denotes filter, in this case the date after the | specifies the format-->
{% endfor %}