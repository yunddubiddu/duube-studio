<script setup lang="ts"></script>

<template>
    <div class="w-full h-[100px] border border-b-gray-400 font-bungee">
        <div class="flex items-center justify-between container h-[100px]">
            <h1 class="w-[220px] h-[45px] cursor-pointer">
                <NuxtLink to="/">
                    <img alt="-" src="/assets/images/logo/ci.png" width="220" height="45">
                </NuxtLink>
            </h1>
            <nav>
                <ul class="flex items-center gap-[35px] font-md text-gray-100">
                    <li class="menu">
                        <NuxtLink to="aboutus">ABOUT US</NuxtLink>
                    </li>
                    <li class="menu">
                        <NuxtLink to="guide">GUIDE</NuxtLink>
                    </li>
                    <li class="menu text-primary">
                        <NuxtLink to="reservation">RESERVATION</NuxtLink>
                    </li>
                    <li class="menu">
                        <NuxtLink to="inqury">INQURY</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu {
    position: relative;

    &:hover {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            background-color: #000;
        }
    }
}
</style>