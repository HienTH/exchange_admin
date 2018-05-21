var _URL = location.href.split('?')[0];
var splitURL = _URL.split('/');
var nodeID = splitURL[splitURL.length - 1];

(function ($) {
    FormGen = function (submitType, nodeType) {
        var v = $(this).attr('id');
        var $thismap = this;
        this.initialize = function () {

            if (submitType == 'edit') {
                    this.loadDataService();
            }

            this.submitService();
        }

        this.submitService = function () {
            $('#' + v).submit(function () {
                var ok = true;
                $('[attr-required="1"]').not('.form-control').each(function () {
                    var val = $(this).find('input').val();
                    if (!val) {
                        mtip('', 'error', '', 'Dữ liêu không hợp lệ');
                        ok = false;
                        return false;
                    }
                    var floatValues =  /[+-]?([0-9]*[.])?[0-9]+/;
                    if (val.match(floatValues)) {
                        ok = true;
                    }
                    else{
                        ok = false;
                    }
                });

                if (ok) {
                    var postData = {"value": $(this).find('input[name="value"]').val(), "id": nodeID};
                    $thismap.editService(postData);
                } else {
                    mtip('', 'error', '', 'Dữ liêu không hợp lệ');
                }

                return false
            });
        }

        this.editService = function (postData) {
            console.log(postData);
            $.ajax({
                url: API_URL + '/manager/suagiachenhlech/',
                type: 'put',
                data: postData,
                datatype: 'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    if (response.status == 'success')
                        mtip('', 'success', '', 'Giá đã được cập nhật thành công');
                    else
                        mtip('', 'error', '', 'Dữ liêu không hợp lệ');       
                },
                error: function (a, b, c) {
                    //console.log(a);
                    mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                }
            })
        }

        this.loadDataService = function () {
            console.log("Load data service");
            var data = {"id": nodeID};
            $.ajax({
                url: API_URL + '/manager/chitietgiachenhlech/',
                type: 'POST',
                data: data,
                datatype: 'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {

                    if (response.status == 'error') {
                        console.log("Du lieu khong hop le");
                        $('#main-content main').html('Không có dữ liệu');
                        return false;
                    }

                    response = response.data;
                    $('input[name="name"]').val(response.namefromtypecoin);
                    $('input[name="group"]').val(response.nametotypecoin);
                    $('input[name="value"]').val(response.value);

                },
                error: function (a, b, c) {
                    console.log(a);
                }
            })
        }

        return this;
    }
    $.fn.FormGen = FormGen
}(jQuery));