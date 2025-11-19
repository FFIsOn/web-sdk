<script>
  import { getVertexAI, processImage } from '../firebase';

  let file = null;
  let imageUrl = null;
  let recognizedText = '';

  async function handleFileChange(event) {
    file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async function recognizeText() {
    if (file) {
      const vertex = getVertexAI();
      const result = await processImage(vertex, file);
      recognizedText = result;
    }
  }
</script>

<div class="text-recognition-container">
  <h2>Text Recognition</h2>
  <input type="file" on:change={handleFileChange} accept="image/*" />
  {#if imageUrl}
    <img src={imageUrl} alt="Selected" />
  {/if}
  <button on:click={recognizeText}>Recognize Text</button>
  {#if recognizedText}
    <p>{recognizedText}</p>
  {/if}
</div>

<style>
  .text-recognition-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  img {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
  }
</style>
