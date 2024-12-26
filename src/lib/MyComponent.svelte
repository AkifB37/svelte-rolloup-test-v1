<script lang="ts">
    const {text} = $props();
  </script>
  
  <div class="my-component">
    <p>{text}</p>
  </div>
  
  <style>
    .my-component {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 4px;
      font-family: Arial, sans-serif;
    }
  </style>
  