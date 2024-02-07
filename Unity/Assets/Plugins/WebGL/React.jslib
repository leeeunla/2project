mergeInto(LibraryManager.library, {
  GameOverToReact: function (userName, score) {
    window.dispatchReactUnityEvent("GameOverToReact", UTF8ToString(userName), score);
  },
  GameStartEventToReact: function () {
    window.dispatchReactUnityEvent("GameStartEventToReact");
  },
  CoinEventToReact: function (coinValue) {
    window.dispatchReactUnityEvent("CoinEventToReact", coinValue);
  },
});