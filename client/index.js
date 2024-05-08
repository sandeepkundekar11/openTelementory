let addUserBtn = document.querySelector("#adduser");
let TableBody = document.getElementById("body");
let name = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");

// get all  user function
const getUser = async () => {
  let userData = await fetch("http://localhost:8000/getAllUser");
  let data = await userData.json();
  console.log(data);
  let Html = "";

  data.forEach((ele, index) => {
    Html += `<tr>
             <th scope="row">${index + 1}</th>
             <td>${ele.name}</td>
             <td>${ele.email}</td>
             <td>${ele.age}</td>
             <td>
               <button type="button" class="btn btn-danger deleteBtn"value=${
                 ele?._id
               } >Delete</button>
             </td>
           </tr>`;
  });

  TableBody.innerHTML = Html;
  let DeleteBtns = document.querySelectorAll(".deleteBtn");
  console.log(TableBody);
  console.log(DeleteBtns);
  DeleteBtns.forEach((buttns) => {
    buttns.addEventListener("click", async () => {
      let deleteUser = await fetch(
        `http://localhost:8000/deleteUser?id=${buttns.value}`,
        {
          method: "DELETE",
        }
      );
      let responce = await deleteUser.json();
      if (responce) {
        getUser();
      }
    });
  });
};

// end of get all user function

getUser();

//  add user function
addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let info = {
    name: name.value,
    email: email.value,
    age: age.value,
  };
  if (name.value.length < 3 || email.value.length < 3 || age < 3) {
    alert("please Enter all deta");
  } else {
    fetch("http://localhost:8000/addUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((ele) => {
        return ele.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          getUser();
          (name.value = ""), (email.value = ""), (age.value = "");
        }
      });
  }
});
