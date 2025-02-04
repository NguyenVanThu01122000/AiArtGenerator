import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import ImageGeneral from "../../../../components/Ui/image";
import { LoadingButtonGeneral } from "../../../../components/Ui/loadingButton";
import icCheckBlue from "../../../../images/Pricing/ic-check-blue.png";
import icCheckGreen from "../../../../images/Pricing/ic-check-green.png";
import icCheckViolet from "../../../../images/Pricing/ic-check-violet.png";
import {
  BenefitText,
  ContentBenefits,
  DetailPricing,
  Header,
  InfoPricing,
  ItemPopular,
  ListBenefit,
  ListPricing,
  PlansDescription,
  PlansTitle,
  Popular,
  Pricing,
  TitleBenefit,
  WrapperPricing,
} from "./styles";
interface PackageInfoType {
  [key: string]: {
    icon: string;
    benefits: string[];
  };
}
export interface ListPricingType {
  id: string;
  name: string;
  price: number;
  credits: number;
}
interface PricingOptionsProps {
  listPricing: ListPricingType[];
  selectPrice: string;
  handleStripeOrder: (id: string) => void;
}
interface ClassNameType {
  [key: string]: string;
}

export default function PricingOptions({
  listPricing,
  selectPrice,
  handleStripeOrder,
}: PricingOptionsProps) {
  const { t } = useTranslation();
  const getButtonClassName = (name: string) => {
    const classNames: ClassNameType = {
      Lite: "btn-eco",
      Basic: "btn-basic",
      default: "btn-pro",
    };
    return classNames[name] || classNames.default;
  };

  const getTitleClassName = (name: string) => {
    const classNames: ClassNameType = {
      Lite: "title-eco",
      Basic: "title-basic",
      default: "title-pro",
    };
    return classNames[name] || classNames.default;
  };

  const getCreditsClassName = (id: string) => {
    const classNames: ClassNameType = {
      Lite: "credits-eco",
      Basic: "credits-basic",
      default: "credits-pro",
    };
    return classNames[id] || classNames.default;
  };

  const getDescription = (name: string) => {
    switch (name) {
      case "Lite":
        return t("DESCRIPTION_LITE_KEY");
      case "Basic":
        return t("DESCRIPTION_BASIC_KEY");
      default:
        return t("DESCRIPTION_PROFESSIONAL_KEY");
    }
  };

  //  chứa thông tin chung cho các loại gói
  const packageInfo: PackageInfoType = {
    Lite: {
      icon: icCheckGreen,
      benefits: [
        t("BENEFIT_NO_ADVERTISEMENT_KEY"),
        t("BENEFIT_LONG_FORM_CONTENT_KEY"),
        t("BENEFIT_ACCESS_TO_PREMIUM_STYLES_KEY"),
        t("BENEFIT_REMOVE_WATERMARK_KEY"),
      ],
    },
    Basic: {
      icon: icCheckViolet,
      benefits: [
        t("BENEFIT_NO_ADVERTISEMENT_KEY"),
        t("BENEFIT_LONG_FORM_CONTENT_KEY"),
        t("BENEFIT_ACCESS_TO_PREMIUM_STYLES_KEY"),
        t("BENEFIT_REMOVE_WATERMARK_KEY"),
      ],
    },
    Premium: {
      icon: icCheckBlue,
      benefits: [
        t("BENEFIT_BRAND_MANAGEMENT_KEY"),
        t("BENEFIT_UNLIMITED_CONTENT_LENGTH_KEY"),
        t("BENEFIT_PRIORITY_SUPPORT_KEY"),
        t("BENEFIT_BETA_ACCESS_KEY"),
      ],
    },
  };

  return (
    <WrapperPricing>
      <Header>
        <Pricing>{t("PRICING")}</Pricing>
        <PlansTitle>
          {t("Explore Flexible Pricing Plans for AI-Powered Creativity")}
        </PlansTitle>
        <PlansDescription>
          {t(
            "Choose your suitable plans and access a world of AI-powered tools"
          )}
          {t("designed to elevate your content creation.")}
        </PlansDescription>
      </Header>

      <ListPricing>
        {listPricing.map((item: ListPricingType) => (
          <DetailPricing
            sx={{
              bgcolor: "common.background",
            }}
            namePricing={item.name}
          >
            <InfoPricing>
              {item.name === "Basic" && (
                <ItemPopular
                  sx={{
                    bgcolor: "common.background",
                  }}
                >
                  <Popular>MOST POPULAR</Popular>
                </ItemPopular>
              )}
              <div className={getTitleClassName(item?.name)}>{item?.name}</div>
              <div className="pricing">${item?.price}</div>
              <div className={getCreditsClassName(item?.id)}>
                + {item?.credits} credits
              </div>
              <div className="content">{getDescription(item?.name)}</div>
            </InfoPricing>
            <LoadingButtonGeneral
              className={getButtonClassName(item?.name)}
              onClick={() => handleStripeOrder(item?.id)}
              disabled={selectPrice === item?.id}
              startIcon={
                selectPrice === item?.id && (
                  <CircularProgress size={20} color="inherit" />
                )
              }
            >
              {t("Payment")}
            </LoadingButtonGeneral>
            {Object.keys(packageInfo).map(
              (packageName: string) =>
                item.name === packageName && (
                  <ListBenefit key={packageName}>
                    <TitleBenefit>
                      {packageName === "Premium"
                        ? t("All the greatness of Plus, and:")
                        : t("All the basic features, include:")}
                    </TitleBenefit>
                    {packageInfo[packageName].benefits.map(
                      (benefit: string, index: number) => (
                        <ContentBenefits key={index}>
                          <ImageGeneral src={packageInfo[packageName].icon} />
                          <BenefitText>{benefit}</BenefitText>
                        </ContentBenefits>
                      )
                    )}
                  </ListBenefit>
                )
            )}
          </DetailPricing>
        ))}
      </ListPricing>
    </WrapperPricing>
  );
}
