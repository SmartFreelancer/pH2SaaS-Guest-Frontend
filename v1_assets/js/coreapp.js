$("#get-started").on("show.bs.modal", function(e) {
    var link = $(e.relatedTarget).data('link')
    $(this).find(".modal-body").load(link);
});