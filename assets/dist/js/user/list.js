var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/manager/infoalluser/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            { data: "id" },
            { data: "name" },
			{ data: "BTC" },
			{ data: "ETH" },
			{ data: "XMR"},
            { data: "USDT"}
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
        }
	})
})
