<!-- <p align="center">
  <a href="https://mpds.f3m.pt/" rel="noopener" target="_blank"><img width="350" src="https://i.imgur.com/OANOfLI.png" alt="MPDS logo"></a></p>
</p> -->

<h1 align="center">F3M-Top-Bar</h1>

<div align="center">

[React](https://reactjs.org/) component for faster and simpler web development.

<!--
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm next package](https://img.shields.io/npm/v/@material-ui/core/next.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/next.svg)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=next)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.material-ui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/material-ui) -->

</div>

## Installation

F3M-Top-Bar is available as an [npm package](npm i f3m-top-bar).

```sh
// with npm
npm i f3m-top-bar

```

## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from "react";
import F3MTopBar from "f3m-top-bar";

function App() {
  return <F3MTopBar keyArea="Link2"></F3MTopBar>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

<h4>Props</h4>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>barPosition</span>
      </td>
      <td>
        <div>
          <span>CSS position of the bar.</span>
        </div>
        <div>
          <div>
            <span>'absolute' | 'sticky'</span>
          </div>
        </div>
      </td>
      <td>
        <span>'absolute'</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>headerContainerClasses</span>
      </td>
      <td>
        <div>
          <span>Classes of the header container.</span>
        </div>
        <div>
          <div>
            <span>String</span>
          </div>
        </div>
      </td>
      <td>
        <span>-
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>summaryContent</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the Summary.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
       <>
      <div className="d-flex w-100">
        <div className='position-relative'>
        {healthiBadgePatientPhoto}
          <img
              className={`border rounded my-auto`}
              src={healthiPatientPhoto}
              onError={healthiHandleErrorImg}
              style={{width: 45, height: 45}}
          />
          </div>
          <div className="d-flex flex-column px-3 text-nowrap my-auto" style={{fontFamily: 'Roboto', fontSize: 13}}>
            <div className='d-block' style={{ fontSize: 15}}><b>{healthiPatientNickname}</b> ({healthiPatientAge})</div>
            <div className='d-block'>{healthiPatientName}</div>
          </div>
          <div className="d-flex flex-column w-100 my-auto mx-4  text-nowrap " style={{fontFamily: 'Roboto', fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis'}}>
            <div className="w-100 text-nowrap" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}><b>SNS:</b> {healthiPatientSNS} {healthiPatientEntity}  |  <b><a>Diagnóstico Principal</a></b>: Ataque Isquêmico Transitó... </div>
            <div className="w-100 text-nowrap" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}><b>Gestor de Caso</b>: Tânia Palma  |  <b>C. Emergência</b>: 933 333 333</div>
          </div>
        <div className=" my-auto">
          <TextField
              id="standard-select-currency"
              className="mx-5"
              select
              label="Episódio"
              value='30/01/2021 (Internamento)'
              /* value={episode}
              onChange={handleChange} */
              variant="standard"
              InputLabelProps={{
                  sx:{fontWeight: 'bold', color: '#444444'}
              }}
              >
              {episodes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                      {option.value}
                  </MenuItem>
              ))}
          </TextField>
        </div>
        <div className="d-flex ms-auto my-auto">
            {patientBadges}
        </div>
      </div>
    </>
      </td>
    </tr>
    <tr>
      <td>
        <span>isHealthiPatientSummaryActive</span>
      </td>
      <td>
        <div>
          <span>Insert the elements of the Healthi Patient's Summary. (isHealthiPatientSummaryActive value has to be "false").</span>
        </div>
        <div>
          <div>
            <span>boolean</span>
          </div>
        </div>
      </td>
      <td>
        <span>false</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiBadgePatientPhoto</span>
      </td>
      <td>
        <div>
          <span>Insert badge in the PatientPhoto (isHealthiPatientSummaryActive value has to be "true".</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span><span className={`badge rounded-pill bg-danger`} style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1, bottom: -10, fontSize: '7px', textTransform: 'capitalize', width: '42px', maxHeight: '13px'}}>
        Inativo
    </span>,</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiPatientPhoto</span>
      </td>
      <td>
        <div>
          <span>Insert patient photo (isHealthiPatientSummaryActive value has to be "true").
</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
      <span>
        'https://www.looper.com/img/gallery/why-did-the-old-man-play-in-squid-game/l-intro-1633465995.jpg',
</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiHandleErrorImg</span>
      </td>
      <td>
        <div>
          <span>Handle error of the patient photo (isHealthiPatientSummaryActive value has to be "true").</span>
        </div>
        <div>
          <div>
            <span>() => void</span>
          </div>
        </div>
      </td>
      <td>
        <span>
        -
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiPatientName</span>
      </td>
      <td>
        <div>
          <span>Insert patient name (isHealthiPatientSummaryActive value has to be "true").</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
        'José Pereira Andrade'
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiPatientAge</span>
      </td>
      <td>
        <div>
          <span>Insert patient age (isHealthiPatientSummaryActive value has to be "true").</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            '92 anos'
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiPatientSNS</span>
      </td>
      <td>
        <div>
          <span>Insert patient SNS (isHealthiPatientSummaryActive value has to be "true").</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            '001'
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiPatientEntity</span>
      </td>
      <td>
        <div>
          <span>Insert patient entity (isHealthiPatientSummaryActive value has to be "true").</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            'Por definir'
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>healthiReportIcon</span>
      </td>
      <td>
        <div>
          <span>Insert report icon (isHealthiPatientSummaryActive value has to be "true").</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            <ReportProblemIcon
                id={'popoverbutton'}
                aria-owns={'mouse-over-popover'}
                aria-haspopup="true"
                className={`ml-4`}
                style={{color: "#FF9800"}}></ReportProblemIcon>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>detailsContentOne</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the first section of details.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            <div style={{display: 'grid', gridGap: 5, fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto min-content auto'}}>
                <div className={`fw-bold`}>Nacionalidade</div>
                <div className={`ps-2`}>Portuguesa</div>
                <div className={`fw-bold`}>Nº de Beneficiário</div>
                <div className={`ps-2`}>001 | 20/08/2025</div>
                <div className={`fw-bold`}>Contatos</div>
                <div className={`ps-2`}>918804958 | squidOldMan@nflx.pt</div>
                <div className={`fw-bold`}>CESD</div>
                <div className={`ps-2`}>00000000012345678914</div>
            </div>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>detailsContentSecond</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the second section of details.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            <>
    <Typography variant="h6" className={`fw-bold`}>
        Benefícios
    </Typography>
    <div className={`row`} style={{fontSize: 14}}>
        <div className={`col-6 d-flex`}>
        <Typography variant="h5" className={`fw-bold pe-4`}>R</Typography>
            <div className="d-flex flex-column">
                <label className="pt-1">
                    Beneficiários do Complemento Solidário para Idosos (BAS)
                </label> 
            </div>
        </div>
        <div className={`col-6 d-flex`}>
            <Typography variant="h5" className={`fw-bold pe-4`}>O</Typography>
            <div className="d-flex flex-column">
                <label className="pt-1" >
                    Doentes crónicos com guia
                </label>
            </div>
            </div>
        </div>
        <Typography variant="h6" className={`fw-bold mt-2`}>
            Regimes de Exceção
        </Typography>
        <div className={`pt-2`} style={{display: 'grid', gridGap: 5, fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto'}}>
            <div className={`fw-bold`}>Vítimas de Incêndio</div>
            <div className={``}>|  <span className={`fst-italic`}>Início</span>: 01/12/2016</div>
        </div>
    </>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>detailsContentThird</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the third section of details.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            <>
    <Typography variant="h6" className={`fw-bold d-inline`}>
        Alergias
    </Typography>
    <IconButton size='small' disableFocusRipple disableRipple style={{right: 10, zIndex: 1, position: 'absolute'}} color="primary" aria-label="save">
    <EditIcon />
    </IconButton>
    <div style={{fontSize: 14}}>
        <span style={{fontStyle: 'italic'}}>Sem alergias.</span>
    </div>
    </>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>isDashedBoardSecondContentInserted</span>
      </td>
      <td>
        <div>
          <span>Insert dashed board between first and second detail section.</span>
        </div>
        <div>
          <div>
            <span>boolean</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            true
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>isDashedBoardThirdContentInserted</span>
      </td>
      <td>
        <div>
          <span>Insert dashed board between second and third detail section.</span>
        </div>
        <div>
          <div>
            <span>boolean</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            true
        </span>
      </td>
    </tr>
    
    <tr>
      <td>
        <span>healthiPatientNickname</span>
      </td>
      <td>
        <div>
          <span>Insert patient nickname.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            'Zé Andrade'
        </span>
      </td>
    </tr>
    
    
    
    
    
    <tr>
      <td>
        <span>healthiPatientNickname</span>
      </td>
      <td>
        <div>
          <span>Insert patient nickname.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            'Zé Andrade'
        </span>
      </td>
    </tr>
    
    
    
    
    <tr>
      <td>
        <span>patientBadges</span>
      </td>
      <td>
        <div>
          <span>Insert badges of the problems that patient's have.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            <>
              <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#FF8882', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>1</Box>
              <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>2</Box>
              <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#FF8882', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>3</Box>
              <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>4</Box>
              <Box component="div" className="text-center" sx={{  width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 }}>5</Box>
            </>
        </span>
      </td>
    </tr>
  </tbody>
</table>
<br>
Yes, it's really all you need to get started! Try it in:
[CodeSandbox](https://codesandbox.io/)
<br>

## License

No License. "(...) nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation."
