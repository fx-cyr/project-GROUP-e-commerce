import React from "react";
import styled from "styled-components";
import samProfile from "./DevPictures/LinkedProfile.jpg";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { colorsSet } from "../../Global/Colors";
import fxProfile from "./DevPictures/FXDublin.jpg";
import bradProfile from "./DevPictures/BradsProfilePic.png";
import tommyProfile from "./DevPictures/TommysPic.png";

export const AboutUs = () => {
  return (
    <Wrapper>
      <Title>
        About the <ColorText>Dev Team</ColorText>
      </Title>
      <Description>
        We are a group of passionate Full-Stack Web Development students at{" "}
        <ConcordiaLink
          href="https://concordiabootcamps.ca/?utm_term=concordia%20bootcamps&utm_campaign=Bloom%20-%20Brand%20-%20Concordia%20Bootcamps%20-%20EN&utm_source=adwords&utm_medium=ppc&hsa_acc=3838886679&hsa_cam=11302039329&hsa_grp=109744304846&hsa_ad=471481223441&hsa_src=g&hsa_tgt=kwd-974538943424&hsa_kw=concordia%20bootcamps&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiA2O39BRBjEiwApB2Ikn4rABDF_gjtLM2O1RfUjULRLwfLLejIWJUxp2LO3KovchxEFBUBjxoCkY0QAvD_BwE"
          target="_blank"
        >
          Concordia Bootcamps
        </ConcordiaLink>
        . Utilizing both frontend and backend technologies, we built DasWatches
        completely from scratch. Oh yeah, and this our first major, full-stack
        e-commerce project!
      </Description>

      <CheckUsOut>
        Check us out on <ColorText>GitHub</ColorText> and{" "}
        <ColorText>LinkedIn</ColorText> for more awesome work!
      </CheckUsOut>

      <TeamMemberContainer>
        <LeftColumn>
          <Member>
            <MemberImg src={samProfile} />
            <MemberInfos>
              <Name>Samuel St-Pierre Lariviere</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks
                  href="https://www.linkedin.com/in/samuel-st-pierre-larivi%C3%A8re/"
                  target="_blank"
                >
                  www.linkedin.com/in/samuel-st-pierre-larivière
                </ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks
                  href="https://github.com/SamuelSTPL"
                  target="_blank"
                >
                  https://github.com/SamuelSTPL
                </ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
          <Member>
            <MemberImg src={fxProfile} />
            <MemberInfos>
              <Name>François-Xavier Cyr</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks
                  href="https://www.linkedin.com/in/fran%C3%A7ois-xavier-cyr/"
                  target="_blank"
                >
                  www.linkedin.com/in/francois-xavier-cyr/
                </ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks
                  href="https://github.com/fx-cyr"
                  target="_blank"
                >
                  https://github.com/fx-cyr
                </ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
        </LeftColumn>
        <RightColumn>
          <Member>
            <MemberImg src={bradProfile} />
            <MemberInfos>
              <Name>Bradley O'Leary</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks
                  href="https://www.linkedin.com/in/bradleyoleary/"
                  target="_blank"
                >
                  www.linkedin.com/in/bradleyoleary
                </ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks
                  href="https://github.com/bradleyoleary"
                  target="_blank"
                >
                  github.com/bradleyoleary
                </ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
          <Member>
            <MemberImg src={tommyProfile} />
            <MemberInfos>
              <Name>Athanasios Tommy Rigas</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks href="https://www.linkedin.com/in/athanasios-tommy-rigas/" target="_blank">
                www.linkedin.com/in/athanasios-tommy-rigas
                </ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks href="https://github.com/AthanasiosR" target="_blank">github.com/AthanasiosR</ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
        </RightColumn>
      </TeamMemberContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
  color: black;
`;

const ColorText = styled.span`
  color: ${colorsSet.primary};
  font-weight: bolder;
`;

// const TopContainer = styled.div`
//   width: 100%;
//   padding-left: 250px;
//   padding-right: 250px;
// `;

const Description = styled.p`
  text-align: center;
  margin-top: 30px;
  color: black;
  font-size: 1.3rem;
  line-height: 1.5em;
  padding: 0px 275px 0px 275px;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const CheckUsOut = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 1.3rem;
`;

const ConcordiaLink = styled.a`
  color: ${colorsSet.primary};
  font-weight: bolder;
  font-size: 1.3rem;
`;

const LeftColumn = styled.div`
  margin-right: 40px;
`;

const RightColumn = styled.div``;

const Member = styled.div`
  min-width: 500px;
  border: 3px solid #15616d;
  border-radius: 10px;
  display: flex;
  padding: 25px;
  margin-top: 40px;
  box-shadow: 0px 8px 23px -2px rgba(22, 98, 108, 0.3);
`;

const MemberImg = styled.img`
  width: 130px;
  border-radius: 50%;
`;

const MemberInfos = styled.div`
  margin-left: 10px;
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  margin-right: 10px;
`;

const ProfilePagesLinks = styled.a`
  color: ${colorsSet.primary};
  font-weight: bolder;
`;

const Linkedin = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const GitHub = styled.div`
  margin-top: 10px;
  align-items: center;
  display: flex;
`;
