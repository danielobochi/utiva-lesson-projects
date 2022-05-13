import _ from "lodash";

const url =
  "https://polar-dusk-46748.herokuapp.com/https://api.fliplet.com/v1/widgets/assets";

// const handleAssets = async () => {
//   let assets;

//   try {
//     const response = await axios.get(url);
//     assets = response.data;
//   } catch (err) {
//     console.log(err);
//   }

//   console.log(assets);
// };

// handleAssets();

/*
const getFromObj = (obj, target) => {
    return _.get(obj, [target]);
  };

  const hasDependencies = (obj) => {
    return _.has(obj, "dependencies");
  };

  const getVersions = (obj) => {
    const versions = [];
    _.forOwn(obj, function (value, key) {
      versions.push(value);
    });
    return versions;
  };

  const normalizeAssets = (arrAssets) => {
    let arr = [...arrAssets];

    arr = _.flattenDeep(arr);
    arr = _.union(arr);

    return arr;
  };
  */
