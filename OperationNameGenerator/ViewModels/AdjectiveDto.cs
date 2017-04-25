using System;

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
}