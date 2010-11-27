// jquery.gspreadsheetdatasource - made by Nicola Tesser (21 november 2011)

(function($) {
	$.fn.gspreadsheetsdatasource = function(url, fields, callback) {

		// Do your awesome plugin stuff here

		var records = new Array();

		var i = 0;
		$.ajax( {
			type : "GET",
			url : url,
			dataType : "xml",
			async : false,
			success : function(xml) {
			
				$(xml).find('item').each(
						function() {
							var pubDate = $(this).find('pubDate').text()
									.substring(0, 22);
							var description = $(this).find('description')
									.text();

							var record = new Array();
							var indexes = new Array();

							for ( var fieldkey in fields) {
								fieldName = fields[fieldkey];
								var index = description
										.indexOf(fieldName + ":");
								if (index == -1) {
									alert("The field " + fieldName
											+ " could not be found");
									return null;
								}

								indexes[fieldName] = index;

							}

							var index_1 = null;
							var index_2 = null;
							var prevFieldName = null;
							for ( var fieldIndex in fields)

							{
								var fieldName = fields[fieldIndex];

								if (index_1 == null) {
									index_1 = indexes[fieldName]
											+ fieldName.length + 1;
									prevFieldName = fieldName;
								} else {

									index_2 = indexes[fieldName] - 2;
									var value = description.substring(index_1,
											index_2);

									index_1 = index_2 + fieldName.length + 3;
									record[prevFieldName] = value;
									prevFieldName = fieldName;
								}
							}

							var value = description.substring(index_1);

							record[prevFieldName] = value;
							records[i] = record;
							i++;

						});

				return callback(records);

			}
		});
	};
})(jQuery);
