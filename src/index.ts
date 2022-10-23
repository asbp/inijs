import tof from "./tof";

const ini = (function () {
    let version = '0.1';

    const funcExports = {
        ...tof
    }

    return funcExports;
})();

export default ini;