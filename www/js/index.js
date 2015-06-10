/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/*
 **********************************************************
 ***************** Notification scheduler *****************
 **********************************************************
*/
/*
var package_name = "com.projects.vrisini";
var now = new Date().getTime(),
delay_20sec = new Date(now + 4*1000);

http_request = new XMLHttpRequest();
var parameters = 'mode=message';				    
http_request.open('POST', 'http://projects.vrisini.com/pradict/index.php?eID=pushMessage', true); // SET method to GET or POST according to form method specified
//http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//http_request.setRequestHeader("Content-length", parameters.length);
//http_request.setRequestHeader("Connection", "close");
http_request.onreadystatechange = function(){
	if (http_request.readyState == 4) {
		var returnVal = JSON.parse(http_request.responseText);
		for(var i=0; i<=2; i++){
			if(returnVal[i].flag === 1){
				window.plugin.notification.local.add({
				  date        : delay_20sec,
				  title       : returnVal[i].title, 
				  message     : returnVal[i].text,
				  repeat      : "daily",
				//  sound       : 'android.resource://' + package_name + '/raw/beep',
				  badge       : 0,
				  id          : (i+600),
				  foreground  : function(notificationId){
									alert("Foreground Notification");
								},
				  background  : function(notificationId){
									alert("Background Notification");
								}           
				});
			}
		}
	}
}
http_request.send(null);
*/
