#!/bin/bash
#
# Copyright 2017 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# Testing css inline for style link element in html body,
# with pedantic, move_css_to_head filters.

start_test CSS inline with style element in html body.

# css not inlined because style link element in body
# AND pedantic filter is enabled
$WGET -O $WGET_OUTPUT $TEST_ROOT/inline_style_link_in_body/inlining_style_link_body.html\
?PageSpeedFilters=pedantic,inline_css
# checking for no inlining of css
check [ $(grep -c "href=\"style.css\"" $WGET_OUTPUT) = 1 ]

# css inlined and moved to head
URL="http://localhost:8080/mod_pagespeed_test/inline_style_link_in_body/inlining_style_link_body.html?PageSpeedFilters=pedantic,inline_css,move_css_to_head"
# checking contents of inlined css
# check [ $(grep -c ".foo" $WGET_OUTPUT) = 1 ]
http_proxy=$SECONDARY_HOSTNAME fetch_until -save "$URL" 'fgrep -c .foo' 1
