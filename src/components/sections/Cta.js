import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Do you have any feedback?
              </h3>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
          </div>
        </div>
      </div>
      <div style = {{display: "flex", flexDirection: "column"}}>
        <div style = {{display: "flex", justifyContent: "space-around"}}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={200}
              height={200} style = {{borderRadius: "50%"}}/>
            <p style = {{color: "red"}}>Stan Flavius</p>
            <p>Bossul echipei</p>
          </div>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={200}
              height={200} style = {{borderRadius: "50%"}}/>
            <p style = {{color: "red"}}>Stan Flavius</p>
            <p>Bossul echipei</p>
          </div>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={200}
              height={200}style = {{borderRadius: "50%"}} />
            <p style = {{color: "red"}}>Stan Flavius</p>
            <p>Bossul echipei</p>
          </div>
        </div>
        <div style = {{display: "flex", justifyContent: "space-around"}}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={200}
              height={200} style = {{borderRadius: "50%"}}/>
            <p style = {{color: "red"}}>Stan Flavius</p>
            <p>Bossul echipei</p>
          </div>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={200}
              height={200} style = {{borderRadius: "50%"}}/>
            <p style = {{color: "red"}}>Stan Flavius</p>
            <p>Bossul echipei</p>
          </div>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={200}
              height={200} style = {{borderRadius: "50%"}}/>
            <p style = {{color: "red"}}>Stan Flavius</p>
            <p>Bossul echipei</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
