<form id="theform" class="place-add">
    <div class="add-form-content">
    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">From TypeCoin </div>
        <div class="col-lg-9 no-padding">
            <input type="text" name="name" id="name" class="form-control" readonly/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">To TypeCoin </div>
        <div class="col-lg-9 no-padding">
            <input type="text" name="group" id="group" class="form-control" readonly/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Value </div>
        <div class="col-lg-9 no-padding">
            <input type="text" name="value" id="value" class="form-control"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <input type="hidden" name="latitude" id="latitude"/>
    <input type="hidden" name="longitude" id="longitude"/>

    <div class="add-form-submit center">
        <input value="Đồng Ý" class="btn" type="submit">
    </div>
    </div>
</form>

<!--
    <input value="Làm lại" class="btn btn-default" type="reset">