using System;
using System.Collections.Generic;

namespace OperationNameGenerator.ViewModels
{
    public class AdjectiveDto
    {
        public Guid Id {get;set;}
        public string Value { get; set; }
    }

    public class AdjectiveReadDto
    {
        public string Value {get;set;}
    }

    public class AdjectiveListDto
    {
        public List<AdjectiveDto> Adjectives { get; set; }
        public AdjectiveListDto()
        {
            Adjectives = new List<AdjectiveDto>();
        }

        public AdjectiveListDto(List<AdjectiveDto> adjectives)
        {
            Adjectives = adjectives;
        }
    }
}