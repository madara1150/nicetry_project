<template>
  <div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-white uppercase bg-gray-800">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 3" class="bg-gray-600 border-b hover:bg-gray-50">
                <td class="w-[15%] p-3">
                    <img src="https://e0.pxfuel.com/wallpapers/351/540/desktop-wallpaper-madara-uchiha-mobile-madara-uchiha-mobile-for-your-mobile-tablet-explore-madara-mobile-madara-madara-uchiha-madara-madara-dark-thumbnail.jpg" class="rounded h-10">
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
            </tr>

        </tbody>

    </table>
</div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>