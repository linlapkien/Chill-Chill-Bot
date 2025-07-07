const a0_0x1d7714 = a0_0x1875;
(function (_0x3c3b7e, _0x372c7d) {
  const _0x36bb13 = a0_0x1875,
    _0x3a755e = _0x3c3b7e();
  while (!![]) {
    try {
      const _0x4b6fee =
        parseInt(_0x36bb13(0x1c8)) / 0x1 +
        (-parseInt(_0x36bb13(0x1d3)) / 0x2) *
          (parseInt(_0x36bb13(0x1cc)) / 0x3) +
        (-parseInt(_0x36bb13(0x1d4)) / 0x4) *
          (-parseInt(_0x36bb13(0x1c4)) / 0x5) +
        (parseInt(_0x36bb13(0x1d5)) / 0x6) *
          (parseInt(_0x36bb13(0x1c6)) / 0x7) +
        parseInt(_0x36bb13(0x1d8)) / 0x8 +
        -parseInt(_0x36bb13(0x1cd)) / 0x9 +
        (parseInt(_0x36bb13(0x1d1)) / 0xa) * (parseInt(_0x36bb13(0x1d9)) / 0xb);
      if (_0x4b6fee === _0x372c7d) break;
      else _0x3a755e['push'](_0x3a755e['shift']());
    } catch (_0x49c7f4) {
      _0x3a755e['push'](_0x3a755e['shift']());
    }
  }
})(a0_0x56ed, 0x9e60b),
  console[a0_0x1d7714(0x1d0)](a0_0x1d7714(0x1d2));
function a0_0x56ed() {
  const _0x2a53cb = [
    '11tcbZBj',
    'tabs',
    '59770HNyqGt',
    'sendCommand',
    '38787wQmDDV',
    'debugger',
    '1276808TxJZUp',
    'mouseMoved',
    'Input.dispatchMouseEvent',
    'onMessage',
    '897PGwUnq',
    '3974436KRdUIu',
    'mousePressed',
    'mouseReleased',
    'log',
    '90490QMEKDY',
    'Background\x20service\x20worker\x20started',
    '5764gmlJik',
    '92fKjHIU',
    '60MjFVkY',
    'query',
    '1.2',
    '2686624FjCTRk',
  ];
  a0_0x56ed = function () {
    return _0x2a53cb;
  };
  return a0_0x56ed();
}
function click(_0x35af6d, _0x5da6e7, _0x231d73 = 'left') {
  const _0x1a14f2 = a0_0x1d7714;
  chrome[_0x1a14f2(0x1c3)][_0x1a14f2(0x1d6)](
    { currentWindow: !![] },
    function (_0x2c63da) {
      const _0x2e648d = _0x1a14f2,
        _0x2e7e71 = { tabId: _0x2c63da[0x0]['id'] };
      chrome['debugger']['attach'](_0x2e7e71, _0x2e648d(0x1d7), function () {
        const _0x2beda2 = _0x2e648d;
        chrome['debugger'][_0x2beda2(0x1c5)](_0x2e7e71, _0x2beda2(0x1ca), {
          type: _0x2beda2(0x1c9),
          x: _0x35af6d,
          y: _0x5da6e7,
        }),
          chrome[_0x2beda2(0x1c7)][_0x2beda2(0x1c5)](
            _0x2e7e71,
            'Input.dispatchMouseEvent',
            {
              type: _0x2beda2(0x1ce),
              button: _0x231d73,
              x: _0x35af6d,
              y: _0x5da6e7,
              clickCount: 0x1,
            }
          ),
          chrome[_0x2beda2(0x1c7)][_0x2beda2(0x1c5)](
            _0x2e7e71,
            _0x2beda2(0x1ca),
            {
              type: _0x2beda2(0x1cf),
              button: _0x231d73,
              x: _0x35af6d,
              y: _0x5da6e7,
              clickCount: 0x1,
            }
          );
      });
    }
  );
}
function a0_0x1875(_0x3f78af, _0x3a6b57) {
  const _0x56ed7c = a0_0x56ed();
  return (
    (a0_0x1875 = function (_0x18753a, _0x2fd751) {
      _0x18753a = _0x18753a - 0x1c3;
      let _0x3b5e19 = _0x56ed7c[_0x18753a];
      return _0x3b5e19;
    }),
    a0_0x1875(_0x3f78af, _0x3a6b57)
  );
}
chrome['runtime'][a0_0x1d7714(0x1cb)]['addListener'](
  ({ x: _0xa9bce5, y: _0x752cd6 }) => {
    const _0x34a034 = a0_0x1d7714;
    console[_0x34a034(0x1d0)](_0x34a034(0x1cb)),
      console[_0x34a034(0x1d0)](_0xa9bce5, _0x752cd6),
      click(_0xa9bce5, _0x752cd6);
  }
);
