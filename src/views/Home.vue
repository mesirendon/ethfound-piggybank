<template>
  <div class="home">
    <div class="row">
      <div>
        <div class="col">
          <h1>Resumen de tu cuenta</h1>
          <div class="row">
            <div class="col">
              <h2>Cuenta</h2>
              <h3>1.23 ETH</h3>
            </div>
            <div class="col">
              <h2>Alcancia</h2>
              <h3>1.34 ETH</h3>
            </div>
          </div>
        </div>
        <div class="col">
          <form @submit.prevent>
            <div class="form-group">
              <label for="amount">Amount</label>
              <input type="number" min="0" step="0.01" class="form-control" id="amount">
            </div>
            <div class="form-group">
              <label for="msg">Message</label>
              <input type="text" class="form-control" id="msg">
            </div>
            <button type="submit" class="btn btn-primary">Send Funds</button>
            <button class="btn btn-warning" type="button">Withdraw</button>
          </form>
        </div>
      </div>
      <div class="col">
        <h1>App piggy bank</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
