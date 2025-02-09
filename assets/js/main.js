$(document).ready(function () {
  $("#add").click(function () {
    $(this).before(
      '<div class="input-group mb-3"><button class="btn-1 hidden input-group-text input-group-text-custom"><i class="fa-solid fa-check"></i></button></i><input placeholder="افزودن کار جدید ..." type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/><button  class=" btn-2 hidden input-group-text input-group-text-custom"><i class="fa-solid fa-trash"></i></button> <button  class=" btn-3 hidden input-group-text input-group-text-custom"><i class="fa-solid fa-pen-to-square"></i></button></div>'
    );
  });
  $("#submit").click(function () {
    let isValid = true;
    $("input").each(function () {
      if ($(this).val().trim() === "") {
        isValid = false;
        return false;
      }
    });
    if (!isValid) {
      alert("همه فیلد ها را پر کنید.");
      return
    }
    $(".body div").children("input").attr("disabled", true);
    $(".body div").children(".btn-2 , .btn-3 , .btn-1").removeClass("hidden");
  });
  $(".body").on("click", ".btn-2", function () {
    $(this).parent(".input-group").fadeOut(200);
  });
  $(".body").on("click", ".btn-3", function () {
    $(this)
      .parent(".input-group")
      .children("input")
      .attr("disabled", false)
      .focus();
  });
  $("#delet").click(function () {
    $(".input-group").remove();
  });
  $(".body").on("click", ".btn-1", function () {
    $(this)
      .parent(".input-group")
      .children("input")
      .css({ "background-color": "#24ad24", color: "#fff" });
  });
});
