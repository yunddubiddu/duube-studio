<script setup lang="ts"></script>

<template>
    <div class="w-full h-[250px] border bg-primary text-white">
        <section class="container flex justify-between items-center">
            <div class="flex flex-col gap-[35px]">
                <h1 class="w-[220px] h-[45px] cursor-pointer">
                    <NuxtLink to="/">
                        <img alt="" src="/assets/images/logo/ci-white.png">
                    </NuxtLink>
                </h1>
                <div class="flex items-center gap-2.5">
                    <NuxtLink to="/" class="w-[40px] h-[40px] bg-white opacity-70 hover:opacity-100 rounded-xl">
                        <img alt="" width="40" height="40" class="rounded-xl">
                    </NuxtLink>
                    <NuxtLink to="/" class="w-[40px] h-[40px] bg-white opacity-60 hover:opacity-100 rounded-xl">
                        <img alt="" width="40" height="40" class="rounded-xl">
                    </NuxtLink>
                    <NuxtLink to="/" class="w-[40px] h-[40px] bg-white opacity-60 hover:opacity-100 rounded-xl">
                        <img alt="" width="40" height="40" class="rounded-xl">
                    </NuxtLink>
                    <NuxtLink to="/" class="w-[40px] h-[40px] bg-white opacity-60 hover:opacity-100 rounded-xl">
                        <img alt="" width="40" height="40" class="rounded-xl">
                    </NuxtLink>
                </div>
            </div>
            <div class="flex flex-col gap-[40px]">
                <nav>
                    <ul class="flex items-center gap-[30px] text-md-m">
                        <li>
                            <NuxtLink to="aboutus">회사소개</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">오시는 길</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">이용약관</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">개인정보처리방침</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">스튜디오 이용규칙</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <ul class="flex items-center flex-wrap gap-10 opacity-70">
                    <li class="flex items-center gap-1">
                        <h4 class="text-md">상호명</h4>
                        <p class="text-md-m">스튜디오두비</p>
                    </li>
                    <li class="flex items-center gap-1">
                        <h4 class="text-md">사업자등록번호</h4>
                        <p class="text-md-m">000-00-00000</p>
                    </li>
                    <li class="flex items-center gap-1">
                        <h4 class="text-md">대표자</h4>
                        <p class="text-md-m">정윤수</p>
                    </li>
                    <li class="flex items-center gap-1">
                        <h4 class="text-md">통신식품신고번호</h4>
                        <p class="text-md-m">000-00-00000</p>
                    </li>
                    <li class="flex items-center gap-1">
                        <h4 class="text-md">주소</h4>
                        <p class="text-md-m">서울 강남구 선릉로103길 3</p>
                    </li>
                    <li class="flex items-center gap-1">
                        <h4 class="text-md">이메일</h4>
                        <p class="text-md-m">hiyoonsu33@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col text-right">
                <h2>문의전화</h2>
                <h4>010-3780-9837</h4>
                <p>ⓒ 2022 DUUBE! All Rights Reserved.</p>
            </div>
        </section>
    </div>
</template>