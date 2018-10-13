processResponse = (responseData) => {
    this.rawData = [];
    this.cleanedData = {};
    console.log("Matching filter = " + responseData.filtered +" , Returned = " + responseData.items.length);
    this.rawData.push(...responseData.items);
    console.log(this.rawData.length);
  
    this.rawData.forEach((prospie) => {
      Object.assign(this.cleanedData, { [prospie.item_id] : {"link":prospie.link} });
      prospie.fields.forEach((field) => {
        key = field.external_id + " $_:_$ " + field.label
        if (field.type === "category" && !field.config.settings.multiple) {
          value = field.values[0].value.text;
        } else if (field.type === "category" && field.config.settings.multiple) {
          n = field.values.length;
          value = "";
          for (i = 0; i < n; i++) {
            value += field.values[i].value.text + ", "
          };
          } else if (field.type === "contact") {
              value = field.values[0].value.name;
            } else if (field.type === "app" && !field.config.settings.multiple) {
                value = field.values[0].value.title;
              } else if (field.type === "app" && field.config.settings.multiple) {
                  n = field.values.length;
                  value = "";
                  for (i = 0; i < n; i++) {
                    value += field.values[i].value.title + ", "
                  };
                } else if (field.type === "location") {
                    value = field.values[0].formatted;
                  } else if (field.type === "date") {
                      value = field.values[0].start_date;
                    } else if ((!field.values.length) || (field.type === "image")) {
                      value = "NA";
                    } else value = field.values[0].value
          Object.assign(this.cleanedData[prospie.item_id],{[key]:value});
      });
    });
  
    return this.cleanedData
  }

  module.exports = processResponse;