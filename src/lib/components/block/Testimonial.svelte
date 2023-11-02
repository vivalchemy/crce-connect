<script>
  export let name = "Tania Andrew";
  export let profilePic =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80";
  export let role = "Frontend Lead @ Google";
  export let testimonial =
    "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!";
</script>

<div
  class=" px-4 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border shadow-md"
>
  <div
    class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none"
  >
    <img
      src={profilePic}
      alt={name}
      class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div class="flex w-full flex-col gap-0.5">
      <div class="flex items-center justify-between">
        <h5
          class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          {name}
        </h5>
      </div>
      <p
        class="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased"
      >
        {role}
      </p>
    </div>
  </div>
  <div class="mb-6 p-0">
    <p
      class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
    >
      {testimonial}
    </p>
  </div>
</div>
