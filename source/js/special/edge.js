﻿"use strict";var $check={get:function(t){let e={},s="",r="";location.search&&(s=location.search.substring(1).split("&"));for(let t=0,i=s.length;t<i;t++)(r=s[t].split("="))[0]&&(e[r[0]]=r[1]||!0);return!!e[t]&&e[t]}},isEdge=!!/Edge\//.test(navigator.userAgent);