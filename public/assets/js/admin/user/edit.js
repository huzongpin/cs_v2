webpackJsonp([2],{0:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t(336),t(9),t(306);var i=t(326),s=n(i),o=t(312),l=n(o),d=$(".koala-admin-user-edit-page");d.find("form").formValidation({autoFocus:!0,framework:"bootstrap",icon:{valid:!1,invalid:!1,validating:"fa fa-refresh"},row:{valid:"has-success"},fields:{name:{validators:{notEmpty:{message:"姓名不能为空"}}},phone:{validators:{notEmpty:{message:"手机号码不能为空"},phone:{country:"countrySelectBox",message:"手机号码格式不正确"}}},email:{validators:{notEmpty:{message:"Email不能为空"},regexp:{regexp:"^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$",message:"Email格式不正确"}}},qq:{validators:{digits:{message:"QQ号码只能包含数字"}}}}}).on("change",'[name="countrySelectBox"]',function(e){d.find("form").formValidation("revalidateField","phone")}).on("success.form.fv",function(e){e.preventDefault();var a=$(e.target),t=a.data("formValidation"),n=d.find("form").serializeObject(),i=d.find("#data_user_id").val();i?l["default"].update(i,n).then(function(e){e&&e.id?s["default"].alert({message:"用户信息更新成功~"}).then(function(){window.location.href="/admin/users"}):(s["default"].alert("用户信息更新失败，请稍后再试~"),t.disableSubmitButtons(!1))})["catch"](function(e){e&&e.message?s["default"].alert(e.message):(s["default"].alert("用户信息更新失败，请稍后再试~"),t.disableSubmitButtons(!1))}):l["default"].create(n).then(function(e){e&&e.id?s["default"].confirm({message:"用户信息添加成功，是否继续添加？"})["catch"](function(){location.href="/admin/users"}):(s["default"].alert("用户信息添加失败，请稍后再试~"),t.disableSubmitButtons(!1))})["catch"](function(e){e&&e.message?s["default"].alert(e.message):(s["default"].alert("用户信息添加失败，请稍后再试~"),t.disableSubmitButtons(!1))})})},336:function(e,a){}});