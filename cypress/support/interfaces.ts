interface ReleaseFormResponse {
  data: {
    searchValue: [
      {
        product: {
          wrapperProductResponse: {
            formProduct: {
              label: string;
            };
          };
        };
      }
    ];
  };
}

interface ApiResponse {
  data: {
    searchValue: [
      {
        orders: [
          {
            num: string;
          }
        ];
      }
    ];
  };
}

interface CreatedByResponse {
  data: {
    searchValue: [
      {
        createdBy: string;
      }
    ];
  };
}

interface ProductTypeMvmt {
  data: {
    searchValue: [
      {
        product: {
          type: {
            label: string;
          };
        };
      }
    ];
  };
}

interface ProductFamily {
  data: {
    searchValue: [
      {
        product: {
          productFamily: {
            name: string;
          };
        };
      }
    ];
  };
}

interface ProductDci {
  data: {
    searchValue: [
      {
        product: {
          dic: {
            name: string;
          };
        };
      }
    ];
  };
}



interface SaisieSiteId {
  data: {
    searchValue: [
      {
        site: {
          name: string;
        };
      }
    ];
  };
}

interface DeliveryMode {
  data: {
    deliveryMode: {
      code: number;
    };
  };
}

interface BoxQty {
  data: {
    boxQuantity: bigint;
  };
}

interface UnitQty {
  data: {
    unitQuantity: bigint;
  };
}

interface InventoryForm {
  searchValue: [
    {
      formProduct: {
        label: string;
      };
    }
  ];
}

type NewParamedicPersonListe = {
  searchValue: [
    {
      lastName: string;
      firstName: string;
      cin: string;
      mobile: string;
      email: string;
    }
  ];
};
