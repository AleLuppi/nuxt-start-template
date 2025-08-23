<template>
  <div class="flex flex-col min-h-screen">
    <UiHeader>
      <!-- NOTE: Customize header -->
    </UiHeader>

    <main class="flex-grow">
      <slot />
    </main>

    <footer>
      <!-- NOTE: Customize footer -->
    </footer>
  </div>
</template>
