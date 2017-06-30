jQuery(document).ready(function() {
	
  	$('#world-map').vectorMap(
  		{
  			map: 'world_mill',
			zoomOnScroll: false,
			regionsSelectable: true,
			regionsSelectableOne: true,	
			regionStyle: {
				hover: {
				    "fill-opacity": 0.8,
				    cursor: 'pointer'
				},
				selected:{
					fill: 'lightblue'
				}

			},
			markersSelectable: true,
			markerStyle: {
		      	initial: {
			        fill: 'transparent',
			        stroke: '#383f47'
		      	}
		    },
	    	markers: [				
				{latLng: [37.775065, -122.426614], name: 'San-Francisco'},
				{latLng: [38.839656, -77.080497], name: 'Washington'},
				{latLng: [-8.403751, -53.326015], name: 'Brasilia'}
			],
			labels: {
		      	regions: {
			        render: function(code){
			          return code.split('-')[1];
			        },
			        offsets: function(code){
						return {
							'San-Francisco': [37.775065, -122.426614],
							'Washington': [38.839656, -77.080497],
							'Brasilia': [-8.403751, -53.326015]							
						}[code.split('-')[1]];
					}
				},
				markers: {
                render: function(code) {
	                    if(code == '0') {
	                        return "San-Francisco";
	                    }
	                    else if(code == '1'){	                    	
	                        return "Washington";
	                    }
	                    else if(code == '2'){
	                    	return "Brasilia"
	                    }
	                }
	            }
			}
		}
		
  	);
});