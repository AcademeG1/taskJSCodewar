function createSecretHolder(secret) {
  return {
  getSecret: function(){return secret},
  setSecret: function(x){return secret = x}
  };
}
