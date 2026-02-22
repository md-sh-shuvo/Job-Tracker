

const categoryAll = document.getElementById('catagory-all');
const categoryInterview = document.getElementById('catagory-interviewed');
const categoryRejected = document.getElementById('catagory-rejected')


categoryAll.addEventListener("click",  function() {
    categoryInterview.classList.remove("bg-[#3B82F6]", "text-white")
    categoryInterview.classList.add("bg-white", "hover:bg-[#3B82F6]", "hover:text-white")


    categoryAll.classList.add("bg-[#3B82F6]", "text-white")
    categoryAll.classList.remove("bg-white")

    categoryRejected.classList.remove("bg-[#3B82F6]", "text-white")
    categoryRejected.classList.add("bg-white")
})


categoryInterview.addEventListener("click", function() {
    categoryAll.classList.remove("bg-[#3B82F6]", "text-white")
    categoryAll.classList.add("bg-white", "hover:bg-[#3B82F6]", "hover:text-white")

    categoryInterview.classList.add("bg-[#3B82F6]", "text-white")
    categoryInterview.classList.remove("bg-white")

    categoryRejected.classList.remove("bg-[#3B82F6]", "text-white")
    categoryRejected.classList.add("bg-white")
})


categoryRejected.addEventListener("click", function() {

    categoryAll.classList.remove("bg-[#3B82F6]", "text-white")
    categoryAll.classList.add("bg-white")

    categoryInterview.classList.remove("bg-[#3B82F6]", "text-white")
    categoryInterview.classList.add("bg-white")

    categoryRejected.classList.add("bg-[#3B82F6]", "text-white")
    categoryRejected.classList.remove("bg-white")
})