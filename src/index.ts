import tof from "./tof";

const ini = (function () {
    let version = '1.0';

    const funcExports = {
        ...tof
    }

    return funcExports;
})();

export default ini;